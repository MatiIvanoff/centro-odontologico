import { useReducer } from "react";
import { ACTIONS, authReducer, initialState } from "./AuthReducer";

const useAuthReducer = () => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const { usuario, estaAutenticado, loadingAuth, error } = state;

    return (
        {
            usuario, estaAutenticado, loadingAuth, error,
            initRequest: () => dispatch({ type: ACTIONS.INIT_REQUEST }),
            loginUser: (user) => dispatch({ type: ACTIONS.LOGIN_USUARIO, payload: user }),
            setAuthErrors: (error) => dispatch({ type: ACTIONS.AUTH_ERRORS, payload: error }),
            logoutUser: () => dispatch({ type: ACTIONS.LOGOUT }),
            verifyFailure: () => dispatch({ type: ACTIONS.VERIFY_FAILURE })
        }
    )
}

export default useAuthReducer