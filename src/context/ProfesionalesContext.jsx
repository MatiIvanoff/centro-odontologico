import { createContext, useContext, useReducer, useState } from "react";
import { peticionListarProfesionalesPorServicio } from "../API/profesionales";
import { ACTIONS, initialState, profesionalesReducer } from "../reducer/profesionalesReducer/profesionalesReducer";
import { useProfesionalesReducer } from "../reducer/profesionalesReducer/useProfesionalesReducer";


export const PrefesionalesContext = createContext();

export const useProfesionalesContext = () => {
    const context = useContext(PrefesionalesContext)
    if (!context) {
        throw new Error("El contexto ProfesionalesContext requiere ser utilizado con ProfesionalesProvider");
    }
    return context
    
}


export const ProfesionalesProvider = ({ children }) => {
    const {isLoading, errors, profesionalesPorServicios, initFetchProf, successFetchProf, updateErrorProf} = useProfesionalesReducer()

    const listarProfesionalesPorServicios = async (id) => {
        initFetchProf()

        try {
            const response = await peticionListarProfesionalesPorServicio(id)
            successFetchProf(response.data)

        } catch (error) {
            console.log(error);
            updateErrorProf(error.response.data.message)
        }
        
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