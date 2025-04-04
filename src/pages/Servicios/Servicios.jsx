import { useEffect, useState } from "react"
import { CardServicio } from "./CardServicio"
import './Servicios.css'
import { peticionListarServicios, peticionListarServiciosPorCategoria } from "../../API/servicios"
import { ClipLoader } from "react-spinners"
import { NavLink, useParams } from "react-router"

export const Servicios = () => {

    // CÓMO CAPTURAR EL PARÁMETRO DE LA URL ?
    const params = useParams();
    console.log(params);

    const [listadoServicios, setListadoServicios] = useState([])
    const [isLoading, setIsLoading] = useState(false)



    // HAGO DE USO DEL HOOK PARA PODER HACER LA PETICIÓN SOLO UNA VEZ. 
    useEffect(() => {
        setIsLoading(true);

        /* VERIFICAR SI LLEGA LA CATEGORIA POR PARÁMETRO */
        if (params.categoria && params.categoria != 'all') {
            // filtrar por categoría
            const categoria = params.categoria;
            peticionListarServiciosPorCategoria(categoria)
                .then((response) => {
                    setListadoServicios(response)
                })
                .catch((error) => {
                    console.log(error);

                }).finally(() => {
                    setIsLoading(false);
                })

        } else {
            peticionListarServicios()
                .then((response) => {
                    console.log(response);
                    setListadoServicios(response);
                })
                .catch((error) => {
                    console.log(error);
                }).finally(() => {
                    setIsLoading(false);
                })
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
                                    <CardServicio key={servicio.id} id={servicio.id} titulo={servicio.titulo} imagen={servicio.imagen} descripcion={servicio.descripcion} />
                                )
                            })


                    }
                </div>



            </div>
        </section>

    )
}
