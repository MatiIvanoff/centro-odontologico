import { NavLink } from 'react-router'
import './MainHeader.css'
import { useAuthContext } from '../../context/authContext'
export const MainHeader = () => {

    const { estaAutenticado } = useAuthContext();
    return (
        <header className="main-header">
            <div className="container">
                <h1 className="logo">Centro odontologico</h1>
                <nav className="menu">
                    <ul className="listado-menu">
                        <li className="item-menu"><NavLink className="enlace-menu" to="/">Inicio</NavLink></li>
                        <li className="item-menu"><NavLink className="enlace-menu" to="/servicios">Servicios</NavLink></li>
                        <li className="item-menu"><NavLink className="enlace-menu" to="/turnos">Turnos</NavLink></li>
                        <li className="item-menu"><NavLink className="enlace-menu" to="/contacto">Contacto</NavLink></li>

                        {
                            estaAutenticado
                                ?
                                <>
                                    <li className="item-menu"><NavLink className="enlace-menu" to="/perfil">Perfil</NavLink></li>
                                    <li className="item-menu"><NavLink className="enlace-menu" to="/salir">Salir</NavLink></li>
                                </>
                                :
                                <>
                                    <li className="item-menu"><NavLink className="enlace-menu" to="/login">Iniciar Sesión</NavLink></li>
                                    <li className="item-menu"><NavLink className="enlace-menu" to="/registro">Registro</NavLink></li>
                                </>
                        }



                    </ul>
                </nav>
            </div>
        </header>
    )
}
