/* 
    El hook useContext() -> nos brinda la posibilidad de compartir estados y funciones de forma global sobre toda la aplicación.

*/

import { createContext, useContext, useState } from "react";
import { peticionLogin } from "../API/auth";

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
    const [error, setError] = useState(null);
    const [usuario, setUsuario] = useState(null);
    const [estaAutenticado, setEstaAutenticado] = useState(false);
    const [loadingAuth, setLoadingAuth] = useState(false);

    const loginUsuario = async (usuario) => {
        setLoadingAuth(true)
        try {
            const response = await peticionLogin(usuario);
            setUsuario(response.data.usuario)
            setEstaAutenticado(true)
            setError(null)
        } catch (error) {
            console.log(error);
            
            setError(error.response.data.message)
        }
        setLoadingAuth(false)
    }


    // RETORNO A LOS ELEMENTOS HIJOS DEL CONTEXTO (GENERALMENTE A TODA LA APP) LOS ESTADOS Y FUNCIONES QUE QUIERO COMPARTIR.
    return (
        <AuthContext.Provider value={{
            usuario,
            estaAutenticado,
            error,
            loadingAuth,
            loginUsuario
        }}>
            {children}
        </AuthContext.Provider>
    )
}

