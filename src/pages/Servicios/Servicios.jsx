import { useEffect, useState } from "react"
import { CardServicio } from "./CardServicio"
import './Servicios.css'
import { peticionListarServicios, peticionListarServiciosPorCategoria } from "../../API/servicios"
import { ClipLoader } from "react-spinners"
import { NavLink, useParams } from "react-router"
import { useServiceContext } from "../../context/ServiceContext"

export const Servicios = () => {

    const {listadoServicios, isLoading, error, listarServicios} = useServiceContext()

    // CÓMO CAPTURAR EL PARÁMETRO DE LA URL ?
    const params = useParams();
    console.log(params);

    // HAGO DE USO DEL HOOK PARA PODER HACER LA PETICIÓN SOLO UNA VEZ. 
    useEffect(() => {

        /* VERIFICAR SI LLEGA LA CATEGORIA POR PARÁMETRO */
        if (params.categoria && params.categoria != 'all') {
            // filtrar por categoría
            const categoria = params.categoria;
        } else {
            listarServicios()
        }

    }, [params])


    return (
        <section className="seccion-servicios">

            <div className="container">

                <div className="contenedor-categorias">
                    <ul className="listado-categorias">
                        <li className="categoria"><NavLink className="enlace-categoria" to="/servicios/all">Todos</NavLink></li>
                        <li className="categoria"><NavLink className="enlace-categoria" to="/servicios/Odontología">Odontología</NavLink></li>
                        <li className="categoria"><NavLink className="enlace-categoria" to="/servicios/Placas">Placas</NavLink></li>
                        <li className="categoria"><NavLink className="enlace-categoria" to="/servicios/Nutrición">Nutrición</NavLink></li>
                    </ul>
                </div>
                <div className="contenedor-servicios">
                    {
                        isLoading
                            ?
                            <ClipLoader cssOverride={{ margin: 'auto' }} />
                            :
                            listadoServicios.map((servicio) => {
                                return (
                                    <CardServicio key={servicio._id} id={servicio._id} titulo={servicio.titulo} imagen={servicio.portada} descripcion={servicio.descripcion} />
                                )
                            })


                    }
                </div>



            </div>
        </section>

    )
}
