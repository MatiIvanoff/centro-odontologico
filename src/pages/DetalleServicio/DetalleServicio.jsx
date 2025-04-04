import { Link, useParams } from "react-router";
import { peticionListarDetalleServicio } from "../../API/servicios"
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import './DetalleServicio.css'

export const DetalleServicio = () => {
    const [detalleServicio, setDetalleServicio] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        peticionListarDetalleServicio(id)
            .then((response) => {
                setDetalleServicio(response);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    return (
        <section className="seccion-detalle-servicio">
            <div className="container">

                <div className="contenedor-detalle-servicio">

                    {
                        error &&
                        <p className="text-error">{error}</p>
                    }
                    {
                        isLoading
                            ?
                            <ClipLoader cssOverride={{ margin: 'auto' }} />
                            :
                            detalleServicio &&
                            <>
                                <div className="breadcumb">
                                    <Link className="breadcumb-enlace" to="/servicios">Servicios</Link>
                                    <span> / </span>
                                    <Link className="breadcumb-enlace" to={`/servicios/${detalleServicio.categoria}`}>{detalleServicio.categoria}</Link>
                                </div>

                                <div className="detalle-servicio">
                                    <p className="detalle-servicio-titulo"> {detalleServicio.titulo} </p>
                                    <p className="detalle-servicio-texto"> {detalleServicio.descripcion} </p>
                                    <div className="contenedor-horarios">
                                        <h4>Horario de atención</h4>
                                        <ul className="listado-horarios">
                                            {
                                                detalleServicio.dias_atencion.map((horario) => {
                                                    return (
                                                        <li className="horario">{horario.dia} : {horario.horarios.join(' / ')} </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <button className="btn-reservar-turno">Reservar Turno</button>
                                    </div>
                                </div>

                            </>
                    }
                </div>
            </div>
        </section>
    )
}
