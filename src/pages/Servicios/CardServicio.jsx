
import { Link } from "react-router";
import { RightArrowIcon } from "../../components/Icons/Icons";


export const CardServicio = ({id, titulo, descripcion, imagen }) => {
    /*
        A TRAVÉS DEL PARÁMETRO props -> NOS LLEGA UN OBJETO CON TODAS LAS PROPIEDADES QUE SE LE PASARON AL COMPONENTE CUANDO LO INVOCARON.
        COMO TODO OBJETO PODEMOS DESESTRUCTURARLO -> const {titulo, descripcion,imagen} = props;
    */


    return (
        <article className="info-servicio">

            <div className="contenedor-img-servicio">
                <img className="img-servicio" src={`/${imagen}`} alt="" />
            </div>

            <h3 className="titulo-servicio">{titulo}</h3>
            <p className="descripcion-servicio">{descripcion}</p>
            <Link to={`/servicio/${id}`} className="contenedor-btn-servicio">
                <span className="btn-servicio" href="">Turnos</span>
                <RightArrowIcon />

            </Link>
        </article>
    )
}
