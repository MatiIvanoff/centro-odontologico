import { RightArrowIcon } from '../../../components/Icons/Icons'
import './EspecialistasServicio.css'

export const EspecialistasServicio = ({ nombre, especialidad, servicios, horarioAtencion }) => {

    return (
        <li className='tabla-doctor'>
            <div className='informacion-doctor'>
                <img className='img-profesional' src="/profesional-1.jpg" alt="profesional" />
                <h3 className="titulo-servicio">{nombre}</h3>
                <p className="descripcion-servicio">Especialista en {especialidad}.</p>


            </div>
            <div className="contenedor-servicios-doc">
                <h5 className="">Servicios:</h5>
                <ul>
                    {
                        servicios.map((servicio) => {
                            return (
                                <li> <RightArrowIcon /> {servicio.titulo} </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='calendar'>
                <h4>Horarios de atención:</h4>
                <div className="horarios">
                    {
                        horarioAtencion.map((horario) => {
                            return (
                                <div className="horario">
                                    <span className="dia">{horario.dia}</span>

                                    <span className='hora-atencion'>{horario.horario_general}</span>

                                </div>
                            )
                        })
                    }
                    <button className="boton-turno">Reservar turno</button>

                </div>
            </div>
        </li>

    )
}