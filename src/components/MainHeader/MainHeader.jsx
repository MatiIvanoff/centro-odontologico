import './MainHeader.css'
export const MainHeader = () => {
    return (
        <header className="main-header">
            <div className="container">
                <h1 className="logo">Centro odontologico</h1>
                <nav className="menu">
                    <ul className="listado-menu">
                        <li className="item-menu"><a className="enlace-menu" href="#">Inicio</a></li>
                        <li className="item-menu"><a className="enlace-menu" href="#">Servicios</a></li>
                        <li className="item-menu"><a className="enlace-menu" href="#">Turnos</a></li>
                        <li className="item-menu"><a className="enlace-menu" href="#">Profesionales</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
