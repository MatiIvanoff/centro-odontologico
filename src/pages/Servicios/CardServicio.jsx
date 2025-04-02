
import { RightArrowIcon } from "../../components/Icons/Icons";


export const CardServicio = ({ titulo, descripcion, imagen}) => {
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
            <a className="btn-servicio" href="#">Learn More <RightArrowIcon /></a>
        </article>
    )
}
