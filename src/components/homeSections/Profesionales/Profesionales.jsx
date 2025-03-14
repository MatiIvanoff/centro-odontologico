import { CardProfesional } from './CardProfesional'
import './Profesionales.css'

export const Profesionales = () => {
    return (
        <section className="seccion-profesionales" >
            <h2>Meet Our Specialists</h2>
            <h6>We use only the best quality materials on the market in order to provide the best products to our patients.</h6>
            <div className="container">

                
            <CardProfesional nombre="Pedro"  descripcion="Ortodoncista" fotoPerfil="Perfil-1.jpg"/>
            <CardProfesional nombre="Juan" descripcion="Ortodoncista" fotoPerfil="Perfil-1.jpg"/>
            <CardProfesional nombre="Agustina" descripcion="Cirujano" fotoPerfil="Perfil-1.jpg"/>

                {
                    /*
                       listadoServicios.map((servicio) => {
                           return (
                               <CardServicio key={servicio.id} aumentarContadorFav={aumentarContadorFav} descontarContadorFav={descontarContadorFav} titulo={servicio.titulo} imagen={servicio.imagen} descripcion={servicio.descripcion} favorito={servicio.favorito} />
                           )
                       })
                           */
                }


            </div>
        </section>
    )
}
