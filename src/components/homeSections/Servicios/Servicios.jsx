import { useEffect, useState } from "react"
import { CardServicio } from "./CardServicio"
import './Servicios.css'
import { peticionListarServicios } from "../../../API/servicios"
import { ClipLoader, PuffLoader } from "react-spinners"

export const Servicios = () => {


    const [listadoServicios, setListadoServicios] = useState([])
    const [contadorFav, setContadorFav] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    function aumentarContadorFav() {
        setContadorFav(contadorFav + 1)
    }
    function descontarContadorFav() {
        setContadorFav(contadorFav - 1)
    }


    // HAGO DE USO DEL HOOK PARA PODER HACER LA PETICIÓN SOLO UNA VEZ. 
    useEffect(() => {
        setIsLoading(true);
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
    }, [])

    // Ejemplo ilustrativo.
    useEffect(() => {
        console.log('Se ha modificado el contador de favoritos.')

    }, [contadorFav])
    
    return (
        <section className="seccion-servicios">
            <div style={{ textAlign: "center" }}>Contador de favoritos: {contadorFav}</div>
            <div className="container">

                {
                    isLoading
                        ?
                        <ClipLoader cssOverride={{margin:'auto'}} />
                        :
                        listadoServicios.map((servicio) => {
                            return (
                                <CardServicio key={servicio.id} aumentarContadorFav={aumentarContadorFav} descontarContadorFav={descontarContadorFav} titulo={servicio.titulo} imagen={servicio.imagen} descripcion={servicio.descripcion} favorito={servicio.favorito} />
                            )
                        })
                }


            </div>
        </section>

    )
}
