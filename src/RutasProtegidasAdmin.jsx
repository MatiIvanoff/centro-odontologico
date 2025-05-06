import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "./context/authContext"


export const RutasProtegidasAdmin = () => {
    const { estaAutenticado, loadingAuth, usuario } = useAuthContext();

    console.log(estaAutenticado);
    console.log(usuario);
    

    if (!loadingAuth) {
        if (!estaAutenticado) {
            return <Navigate to='/login' replace />
        }
        if (usuario.rol != 'admin') {
            return <Navigate to='/' replace />
        }
    }

    return <Outlet />
}
