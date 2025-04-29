import { createContext, useContext, useState } from "react";
import { peticionListarProfesionalesPorServicio } from "../API/profesionales";


export const PrefesionalesContext = createContext();

export const useProfesionalesContext = () => {
    const context = useContext(PrefesionalesContext)
    if (!context) {
        throw new Error("El contexto ProfesionalesContext requiere ser utilizado con ProfesionalesProvider");
    }
    return context
}

export const ProfesionalesProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(null);
    const [profesionalesPorServicios, setProfesionalesPorServicios] = useState([])

    const listarProfesionalesPorServicios = async (id) => {
        setIsLoading(true)
        try {
            const response = await peticionListarProfesionalesPorServicio(id)
            setProfesionalesPorServicios(response.data);
            setErrors(null)
        } catch (error) {
            console.log(error);
            setErrors(error.response.data.message)
 
        }
        setIsLoading(false)
    }
    return (
        <PrefesionalesContext.Provider value={{
            isLoading,
            errors,
            listarProfesionalesPorServicios,
            profesionalesPorServicios
        }}>
            {children}
        </PrefesionalesContext.Provider>
    )
}