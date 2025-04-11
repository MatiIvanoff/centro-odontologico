import { useState } from 'react'
import './Registro.css'

export const Registro = () => {
/*
    const [nombre, setNombre]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    */
    const [formData, setFormData] = useState({nombre:'', email:'', password:'', confirmPassword:''})
    const [formError, setFormError] = useState({nombre:'', email:'', password:'', confirmPassword:''})

    const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,15}$/

    function handleChangeInput(event) {
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    
    function handleSubmit(event) {
        event.preventDefault()
        let errores = {};

        const {nombre, email, password, confirmPassword} = formData

        if (nombre.length < 4) {
            //*console.error("Error! El nombre debe contener al menos 4 caracteres.")
            errores = {...errores, nombre:'Error! El nombre debe contener al menos 4 caracteres.'}
        }

        if (email.length < 8 ) {
            //*console.error("Error! El email debe contener al menos 8 caracteres.")
            errores = {...errores, email:'Error! El email debe contener al menos 8 caracteres.'}

        } else if (!regexEmail.test(email)){
            //*console.error("Error! El email ingresado debe ser válido.")
            errores = {...errores, email:'Error! Error! El email ingresado debe ser válido.'}
        }

        if (password.length < 6) {
            //*console.error("Error! La constraseña debe contener al menos 6 caracteres.")
            errores = {...errores, password:'Error! La constraseña debe contener al menos 6 caracteres.'}

        } else if (!regexPassword.test(password)){
            //*console.error("Error! La constraseña debe contener: mínimo 6 caracteres, maximo 15 caracteres; Al menos una letra mayúscula, Al menos una letra minúscula; Al menos un dígito; No espacio en blanco; Al menos un caracter especial")
            errores = {...errores, password:'Error! La constraseña debe contener: mínimo 6 caracteres, maximo 15 caracteres; Al menos una letra mayúscula, Al menos una letra minúscula; Al menos un dígito; No espacio en blanco; Al menos un caracter especial.'}
        }

        if (password !== confirmPassword) {
            //*console.error("Error! Las constraseñas no coinciden.")
            errores = {...errores, confirmPassword:'Error! Las constraseñas no coinciden.'}
        }

        setFormError(errores)

        if (Object.keys(errores).length == 0) {
            console.log(formData);
        } else {
            console.error("Hay errores") 
        }
        
        
    }
    

  return (
    <section className='seccion-registro'>
        <div className='contenedor-portada'>
            <img src="/portada-registro.jpg" alt="" />
        </div>
            
        <div className='contenedor-registro'>
            <h2>Registro</h2>

            <p>Registrate para acceder a turnos y más.</p>

            <form onSubmit={(event) => handleSubmit(event)}>

                <input name='nombre' onChange={(event) => handleChangeInput(event)} type="text" placeholder='Ingrese su nombre'/>
                {
                    formError.nombre && 
                    <p className='form-error'>{formError.nombre}</p>
                }
                
                <input name='email' onChange={(event) => handleChangeInput(event)} type="email" placeholder='Ingrese su email'/>
                {
                    formError.email && 
                    <p className='form-error'>{formError.email}</p>
                }

                <input name='password' onChange={(event) => handleChangeInput(event)} type="password" placeholder='Ingrese su contraseña'/>
                {
                    formError.password && 
                    <p className='form-error'>{formError.password}</p>
                }

                <input name='confirmPassword' onChange={(event) => handleChangeInput(event)} type="password"  placeholder='Confirmar contraseña'/>
                {
                    formError.confirmPassword && 
                    <p className='form-error'>{formError.confirmPassword}</p>
                }

                <button type="submit">Registrarme</button>
            </form>

            
        </div>
    </section>
  )
}


