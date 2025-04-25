/* 
    El hook useContext() -> nos brinda la posibilidad de compartir estados y funciones de forma global sobre toda la aplicación.

*/

import { createContext, useContext, useEffect, useState } from "react";
import { peticionLogin, peticionRegister, peticionVerificarLogin } from "../API/auth";
import { useNavigate } from "react-router";

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

    const [error, setError] = useState(null);
    const [usuario, setUsuario] = useState(null);
    const [estaAutenticado, setEstaAutenticado] = useState(false);
    const [loadingAuth, setLoadingAuth] = useState(true);

    const loginUsuario = async (usuario) => {
        setLoadingAuth(true)
        try {
            const response = await peticionLogin(usuario);
            setUsuario(response.data.usuario)
            setEstaAutenticado(true)
            setError(null)

            localStorage.setItem('token', response.data.token)
        } catch (error) {
            console.log(error);

            setError(error.response.data.message)
        }
        setLoadingAuth(false)
    }

    const registroUsuario = async (usuario) => {
        setLoadingAuth(true)
        try {
            const response = await peticionRegister(usuario)

            setUsuario(response.data.usuario)
            setEstaAutenticado(true)
            setError(null)
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            setError(error.response.data.message)
            console.log(error.response.data.message)
        }
        setLoadingAuth(false)
    }

    const logoutUsuario = async () => {
        setUsuario(null)
        setEstaAutenticado(false)
        setError(null)
        setLoadingAuth(false)

        localStorage.removeItem('token')
        navigate("/")
    }

    const verificarLogin = async () => {
        setLoadingAuth(true)
        const token = localStorage.getItem('token');
        // si existe el token, vamos a validarlo en el backend, para ello haremos la petición correspondiente.
        if (token) {

            try {
                const response = await peticionVerificarLogin();
                setUsuario(response.data);
                setEstaAutenticado(true);
                setLoadingAuth(false);
                setError(null);
            } catch (error) {
                setUsuario(null)
                setEstaAutenticado(false)
                setError(error.response.data.message)
                setLoadingAuth(false);
            }
        }
        setLoadingAuth(false);
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

