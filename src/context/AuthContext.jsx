/* 
    El hook useContext() -> nos brinda la posibilidad de compartir estados y funciones de forma global sobre toda la aplicación.

*/

import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { peticionLogin, peticionRegister, peticionVerificarLogin } from "../API/auth";
import { useNavigate } from "react-router";
import { authReducer, initialState, ACTIONS } from "../reducer/authReducer/authReducer";



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

    const [state, dispatch] = useReducer(authReducer, initialState);
    const { usuario, estaAutenticado, loadingAuth, error } = state;

    const loginUsuario = async (usuario) => {
        dispatch({ type: ACTIONS.INIT_REQUEST })
        try {
            const response = await peticionLogin(usuario);
            dispatch({ type: ACTIONS.LOGIN_USUARIO, payload: response.data.usuario })
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            console.log(error);
            dispatch({ type: ACTIONS.AUTH_ERRORS, payload: error.response.data.message })
        }
    }

    const registroUsuario = async (usuario) => {
        dispatch({ type: ACTIONS.INIT_REQUEST })
        try {
            const response = await peticionRegister(usuario)
            dispatch({ type: ACTIONS.LOGIN_USUARIO, payload: response.data.usuario })
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            setError(error.response.data.message)
            dispatch({ type: ACTIONS.AUTH_ERRORS, payload: error.response.data.message })
        }

    }

    const logoutUsuario = async () => {
        dispatch({ type: ACTIONS.LOGOUT })
        localStorage.removeItem('token')
        navigate("/")
    }

    const verificarLogin = async () => {
        dispatch({ type: ACTIONS.INIT_REQUEST })
        const token = localStorage.getItem('token');
        // si existe el token, vamos a validarlo en el backend, para ello haremos la petición correspondiente.
        if (token) {

            try {
                const response = await peticionVerificarLogin();
                dispatch({ type: ACTIONS.LOGIN_USUARIO, payload: response.data })

            } catch (error) {
                dispatch({ type: ACTIONS.AUTH_ERRORS, payload: error.response.data.message })
            }
        } else {
            dispatch({ type: ACTIONS.VERIFY_FAILURE })
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

