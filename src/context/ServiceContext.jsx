import { createContext, useContext, useState } from "react";
import { peticionListarDetalleServicio, peticionListarServicios } from "../API/servicios";


export const ServiceContext = createContext();

export const useServiceContext = () => {
    const context = useContext(ServiceContext)
    if (!context) {
        throw new Error("El contexto ServiceContext requiere ser utilizado con AuthProvider");
    }
    return context
}

export const ServiceProvider = ({ children }) => {
    const [listadoServicios, setListadoServicios] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [detalleServicio, setDetalleServicio] = useState(null)

    const listarServicios = async () => {
        setIsLoading(true)
        try {
            const response = await peticionListarServicios()
            setListadoServicios(response.data)
            setError(null)
        } catch (error) {
            setError(error.response.data.message)
        }
        setIsLoading(false)
    }

    const listarDetalleServicio = async (id) => {
        setIsLoading(true)
        try {
            const response = await peticionListarDetalleServicio(id)
            setDetalleServicio(response.data)
 
            
            setError(null)
        } catch (error) {
            setError(error.response.data.message)
        }
        setIsLoading(false)
    }

    return (
            <ServiceContext.Provider value={{
                listadoServicios,
                isLoading,
                error,
                listarServicios,
                detalleServicio,
                listarDetalleServicio
            }}>
                {children}
            </ServiceContext.Provider>
        )
}


