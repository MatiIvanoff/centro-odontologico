export const ACTIONS = {
    INIT_FETCH_PROFESIONALES: 'INIT_FETCH_PROFESIONALES',
    SUCCESS_FETCH_PROFESIONALES: 'SUCCESS_FETCH_PROFESIONALES',
    SET_ERRORS: 'SET_ERRORS'
}
export const initialState = {
    isLoading: false,
    errors: null,
    profesionalesPorServicios: [],
}

export const profesionalesReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INIT_FETCH_PROFESIONALES:
            return {
                ...state,
                isLoading: true,
            }
        case ACTIONS.SUCCESS_FETCH_PROFESIONALES:
            return {
                ...state,
                isLoading: false,
                errors: null,
                profesionalesPorServicios: action.payload
            }
        case ACTIONS.SET_ERRORS:
            return {
                ...state,
                errors: action.payload,
                isLoading: false
            }        
        default:
            break;
    }
}