import { createContext, useContext, useReducer, useState } from "react";
import { peticionListarProfesionalesPorServicio } from "../API/profesionales";
import { ACTIONS, initialState, profesionalesReducer } from "../reducer/profesionalesReducer/profesionalesReducer";


export const PrefesionalesContext = createContext();

export const useProfesionalesContext = () => {
    const context = useContext(PrefesionalesContext)
    if (!context) {
        throw new Error("El contexto ProfesionalesContext requiere ser utilizado con ProfesionalesProvider");
    }
    return context
    
}


export const ProfesionalesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(profesionalesReducer, initialState)
   
    const {isLoading, errors, profesionalesPorServicios} = state

    const listarProfesionalesPorServicios = async (id) => {
        dispatch({
            type: ACTIONS.INIT_FETCH_PROFESIONALES
        })

        try {
            const response = await peticionListarProfesionalesPorServicio(id)
            dispatch({
                type: ACTIONS.SUCCESS_FETCH_PROFESIONALES,
                payload: response.data
            })

        } catch (error) {
            console.log(error);
            dispatch({
                type: ACTIONS.SET_ERRORS,
                payload: error.response.data.message
            })
 
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