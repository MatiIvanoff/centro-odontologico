import { useReducer } from "react"
import { ACTIONS, initialState, profesionalesReducer } from "./profesionalesReducer"

export const useProfesionalesReducer = () => {
    
    const [state, dispatch] = useReducer(profesionalesReducer, initialState)
    const { isLoading, errors, profesionalesPorServicios } = state

    return({
        isLoading, errors, profesionalesPorServicios,
        initFetchProf: () => dispatch({type: ACTIONS.INIT_FETCH_PROFESIONALES}),
        successFetchProf: (profesionales) => dispatch({type: ACTIONS.SUCCESS_FETCH_PROFESIONALES,payload: profesionales}),
        updateErrorProf: (error) =>  dispatch({type: ACTIONS.SET_ERRORS,payload: error})
    })
}