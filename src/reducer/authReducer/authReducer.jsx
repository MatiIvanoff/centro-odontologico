
export const ACTIONS = {
    INIT_REQUEST: 'INIT_REQUEST',
    LOGIN_USUARIO: 'LOGIN_USUARIO',
    AUTH_ERRORS: 'AUTH_ERRORS',
    LOGOUT: 'LOGOUT',
    VERIFY_FAILURE: 'VERIFY_FAILURE',
}



export const initialState = {
    error: null,
    usuario: null,
    estaAutenticado: false,
    loadingAuth: true
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INIT_REQUEST:
            return { ...state, loadingAuth: true }
        case ACTIONS.LOGIN_USUARIO:
            return { ...state, estaAutenticado: true, error: null, usuario: action.payload, loadingAuth: false }
        case ACTIONS.AUTH_ERRORS:
            return { ...state, error: action.payload, loadingAuth: false }
        case ACTIONS.LOGOUT:
            return { ...initialState, loadingAuth: false }
        case ACTIONS.VERIFY_FAILURE:
            return { ...state, loadingAuth: false }

        default:
            return { ...state }
    }
}





/*
el hook useReducer() -> recibe dos parámetors, una función 'reductora' y el estado inicial
y devuelve dos elementos dentro de un array, en primer lugar devuelve el estado, en segundo una función que me permite despachar/indicar las acciones que quiero realizar 
ej:
const [state, dispatch] = useReducer(authReducer, initialState) 

la función dispatch recibe por parametro el obj action -> el cual al menos tendrá el tipo de acción (type) y de forma opcional el payload.

funcion reductora(useReducer): debe ser una función pura, es decir, no debe modificar de forma directa ningun valor que este por fuera de ella. 

En ella vamos a definir que tipo de acciones va a realizar la función reductora, para ello le debemos pasar por parametro la acción en cuestión la cual será un objeto que por lo menos va a tener una propiedad (type) la cual va a indicar que tipo de acción se quiere realizar, y el pasamos el estado actual. 

Cuando identificamos el tipo de acción a realizar, procedemos a modificar los estados del reducer, para ello vamos a hacer un 'return' del nuevo estado (dentro de un obj, si el estado inicial es un obj)

Para pasarle data/información al reducer debemos hacerlo a través del obj action en una propiedad tipicamente llamada 'payload' 


*/