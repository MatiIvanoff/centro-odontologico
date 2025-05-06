/* 
    El hook useContext() -> nos brinda la posibilidad de compartir estados y funciones de forma global sobre toda la aplicación.

*/

import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { peticionLogin, peticionRegister, peticionVerificarLogin } from "../API/auth";
import { useNavigate } from "react-router";
import useAuthReducer from "../reducer/authReducer/useAuthReducer";



// 1º paso crear el contexto.
export const AuthContext = createContext();

//2º paso crear una función que nos facilite el acceso a ese contexto
export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("El contexto AuthContext requiere ser utilizado con AuthProvider");
    }
    return context
}

// 3º paso -> la creación del Provider
export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()
    const { usuario, estaAutenticado, loadingAuth, error, initRequest, loginUser, logoutUser, setAuthErrors, verifyFailure } = useAuthReducer()

    const loginUsuario = async (usuario) => {
        initRequest()
        try {
            const response = await peticionLogin(usuario);
            loginUser(response.data.usuario)
            console.log(response.data.usuario);
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            setAuthErrors(error.response.data.message)
        }
    }

    const registroUsuario = async (usuario) => {
        initRequest()
        try {
            const response = await peticionRegister(usuario)
            loginUser(response.data.usuario)
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            setAuthErrors(error.response.data.message)
        }

    }

    const logoutUsuario = async () => {
        logoutUser();
        localStorage.removeItem('token')
        navigate("/")
    }

    const verificarLogin = async () => {
        initRequest()
        const token = localStorage.getItem('token');
        // si existe el token, vamos a validarlo en el backend, para ello haremos la petición correspondiente.
        if (token) {
            try {
                const response = await peticionVerificarLogin();                
                loginUser(response.data)
            } catch (error) {
                setAuthErrors(error.response.data.message)
            }
        } else {
            verifyFailure()
        }

    }

    // useEffect para verificar si el usuario está logeado en cuanto se renderiza por primera vez la app
    useEffect(() => {
        verificarLogin();
    }, [])

    // useEffect para limpiar posibles errores del form
    useEffect(() => {
        if (error) {
            const timeoout = setTimeout(() => {
                setError(null)
            }, 5000)
            return () => clearTimeout(timeoout)
        }

    }, [error])

    // RETORNO A LOS ELEMENTOS HIJOS DEL CONTEXTO (GENERALMENTE A TODA LA APP) LOS ESTADOS Y FUNCIONES QUE QUIERO COMPARTIR.
    return (
        <AuthContext.Provider value={{
            usuario,
            estaAutenticado,
            error,
            loadingAuth,
            loginUsuario,
            registroUsuario,
            logoutUsuario
        }}>
            {children}
        </AuthContext.Provider>
    )
}

