import { Link, useParams } from "react-router";
import { peticionListarDetalleServicio } from "../../API/servicios"
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import './DetalleServicio.css'
import { useServiceContext } from "../../context/ServiceContext";
import { EspecialistasServicio } from "./EspecialistasServicio/EspecialistasServicio";
import { useProfesionalesContext } from "../../context/ProfesionalesContext";

export const DetalleServicio = () => {
    const { profesionalesPorServicios, listarProfesionalesPorServicios, isLoading: isLoadingProfesionales, errors } = useProfesionalesContext();
    const { listarDetalleServicio, detalleServicio, isLoading, error } = useServiceContext()
    const { id } = useParams();

    console.log(profesionalesPorServicios);
    
    useEffect(() => {
        listarDetalleServicio(id)
        listarProfesionalesPorServicios(id);
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
                                    <div className="contenedor-especialistas">
                                        <ul className="listado-especialistas">
                                            {
                                                (profesionalesPorServicios && profesionalesPorServicios.length > 0) &&
                                                profesionalesPorServicios.map((profesional) => {
                                                    return (
                                                        <EspecialistasServicio nombre={profesional.nombre} especialidad={profesional.especialidad} horarioAtencion={profesional.horarioAtencion} servicios={profesional.servicios} />
                                                    )
                                                })
                                            }

                                        </ul>
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </div>
        </section>
    )
}
