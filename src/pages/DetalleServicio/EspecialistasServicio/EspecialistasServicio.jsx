import './EspecialistasServicio.css'

export const EspecialistasServicio = () => {

    return (
                        <li className='tabla-doctor'>
                            <div className='informacion-doctor'>
                                <h3 className="titulo-servicio">Maria Juana</h3>
                                <p className="descripcion-servicio">Especialista en nutrición.</p>
                                <button className="boton-turno">Reservar turno</button>
                            </div>
                            <div className='calendar'>
                                <h4>Horarios disponibles:</h4>
                                <div className="horarios">
                                    <div className="horario">
                                        <span className="dia">Lunes</span>
                                        <button className="horario-btn">9:00</button>
                                        <button className="horario-btn">10:00</button>
                                        <button className="horario-btn">11:00</button>
                                    </div>
                                    <div className="horario">
                                        <span className="dia">Martes</span>
                                        <button className="horario-btn">9:00</button>
                                        <button className="horario-btn">10:00</button>
                                    </div>
                                    <div className="horario">
                                        <span className="dia">Miércoles</span>
                                        <button className="horario-btn">11:00</button>
                                        <button className="horario-btn">12:00</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
    )
}