import { useState } from "react";
import { RightArrowIcon } from "../../Icons/Icons";


export const CardServicio = ({ titulo, descripcion, imagen, favorito, descontarContadorFav, aumentarContadorFav }) => {
    /*
        A TRAVÉS DEL PARÁMETRO props -> NOS LLEGA UN OBJETO CON TODAS LAS PROPIEDADES QUE SE LE PASARON AL COMPONENTE CUANDO LO INVOCARON.
        COMO TODO OBJETO PODEMOS DESESTRUCTURARLO -> const {titulo, descripcion,imagen} = props;
    */
    const [isFavorite, setIsFavorite] = useState(favorito);

    const handleClickFavorito = () => {
        isFavorite ? descontarContadorFav() : aumentarContadorFav();

        setIsFavorite(!isFavorite);
    }


    return (
        <article className="info-servicio">


            <button onClick={handleClickFavorito}>{isFavorite ? 'Quitar de favoritos' : 'Agregar a favorito'}</button>

            <div className="contenedor-img-servicio">
                <img className="img-servicio" src={`/${imagen}`} alt="" />
            </div>

            <h3 className="titulo-servicio">{titulo}</h3>
            <p className="descripcion-servicio">{descripcion}</p>
            <a className="btn-servicio" href="#">Learn More <RightArrowIcon /></a>
        </article>
    )
}
