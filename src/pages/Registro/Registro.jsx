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

    function handleChangeInput(event) {
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    function handleChangeName(value) {
        setNombre(value)
    }

    function handleChangeEmail(value) {
        setEmail(value) 
    }

    function handleChangePassword(value) {
        setPassword(value) 
    }

    function handleChangeConfirmPassword(value) {
        setConfirmPassword(value) 
    }

    function handleSubmit(event) {
        event.preventDefault()

        console.log(formData);
        
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
                <input name='email' onChange={(event) => handleChangeInput(event)} type="email" placeholder='Ingrese su email'/>
                <input name='password' onChange={(event) => handleChangeInput(event)} type="password" placeholder='Ingrese su contraseña'/>
                <input name='confirmPassword' onChange={(event) => handleChangeInput(event)} type="password"  placeholder='Confirmar contraseña'/>

                <button type="submit">Registrarme</button>
            </form>

            
        </div>
    </section>
  )
}


