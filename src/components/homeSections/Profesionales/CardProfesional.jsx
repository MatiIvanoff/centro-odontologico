import { LinkedinIcon } from "../../Icons/Icons"

export const CardProfesional = ({nombre, profesion, fotoPerfil}) => {
  return (
    <div className='perfil-profesional' style={{background:`url(/${fotoPerfil})`, backgroundSize:"cover", backgroundPosition: "center"}}>

                 
                    <LinkedinIcon/>
                    <div className="info-profesional">
                        <h3>{nombre}</h3>
                        <p>{profesion}</p>
                    </div>
                </div>
  )
}
