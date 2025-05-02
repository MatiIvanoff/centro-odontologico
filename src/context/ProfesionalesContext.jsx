import { createContext, useContext, useReducer, useState } from "react";
import { peticionListarProfesionalesPorServicio } from "../API/profesionales";


export const PrefesionalesContext = createContext();

export const useProfesionalesContext = () => {
    const context = useContext(PrefesionalesContext)
    if (!context) {
        throw new Error("El contexto ProfesionalesContext requiere ser utilizado con ProfesionalesProvider");
    }
    return context
}

const initialState = {
    isLoading: false,
    errors: null,
    profesionalesPorServicios: [],
}

const profesionalesReducer = (state, action) => {
    switch (action.type) {
        case 'INIT_FETCH_PROFESIONALES':
            return {
                ...state,
                isLoading: true,
            }
        case 'SUCCESS_FETCH_PROFESIONALES':
            return {
                ...state,
                isLoading: false,
                errors: null,
                profesionalesPorServicios: action.payload
            }
        case 'SET_ERRORS':
            return {
                ...state,
                errors: action.payload,
                isLoading: false
            }        
        default:
            break;
    }
}

export const ProfesionalesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(profesionalesReducer, initialState)

    const {isLoading, errors, profesionalesPorServicios} = state

    const listarProfesionalesPorServicios = async (id) => {
        dispatch({
            type: 'INIT_FETCH_PROFESIONALES'
        })

        try {
            const response = await peticionListarProfesionalesPorServicio(id)
            dispatch({
                type: 'SUCCESS_FETCH_PROFESIONALES',
                payload: response.data
            })

        } catch (error) {
            console.log(error);
            dispatch({
                type: 'SET_ERRORS',
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