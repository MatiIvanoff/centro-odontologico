import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "./context/authContext"


export const RutasProtegidas = () => {
    const { estaAutenticado, loadingAuth } = useAuthContext();

 
    if (!loadingAuth) {
        if (!estaAutenticado) {
            return <Navigate to='/login' replace />
        }
    }

    return <Outlet />
}
