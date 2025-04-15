import { useState } from 'react'
import './Registro.css'
import { useForm } from 'react-hook-form'

export const RegistroDos = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,15}$/


    const onSubmit = (data) => {
      console.log('No hay errores');
      console.log(data);
    }



    return (
        <section className='seccion-registro'>
            <div className='contenedor-portada'>
                <img src="/portada-registro.jpg" alt="" />
            </div>

            <div className='contenedor-registro'>
                <h2>Registro</h2>

                <p>Registrate para acceder a turnos y más.</p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder='Ingrese su nombre'
                        {
                        ...register("nombre", {
                            required: "El campo nombre es obligatorio",
                            minLength: {
                                value: 4,
                                message:"El nombre debe contener al menos 4 carácteres."
                            } 
                        })
                        }
                    />
                    {
                        errors.nombre &&
                        <p className='form-error'>{errors.nombre.message}</p>
                    }

                    <input type="email" placeholder='Ingrese su email'
                        {
                        ...register("email", {
                            required: "El campo email es obligatorio",
                            minLength: {
                                value: 8,
                                message:"El email debe contener al menos 8 carácteres."
                            } ,
                            pattern:  {
                                value: regexEmail,
                                message: "El email debe poseer un formato válido."
                              }
                        })
                        }
                    />
                    {
                        errors.email &&
                        <p className='form-error'>{errors.email.message}</p>
                    }

                    <input type="password" placeholder='Ingrese su contraseña'
                        {
                        ...register("password", {
                            required: "La contraseña es obligitoria",
                            minLength:{
                                value: 6,
                                message:"La contraseña debe contener al menos 6 carácteres."
                            } ,
                         /*   pattern:  {
                                value: regexPassword,
                                message: "La contraseña debe contener: Al menos 6 carácteres, 1 mayus, 1 minus, 1 digito, y 1 carácter especial."
                              } */
                        })
                        }
                    />
                    {
                        errors.password &&
                        <p className='form-error'>{errors.password.message}</p>
                    }

                    <input type="password" placeholder='Confirmar contraseña'
                        {
                        ...register("confirmPassword", {
                            required: "La confirmación de la contraseña es obligitoria",
                            validate: (value) => {
                                if (watch('password') != value) {
                                    return "Las contraseñas debe coincidir";
                                }
                            }
                        })
                        }
                    />
                    {
                        errors.confirmPassword &&
                        <p className='form-error'>{errors.confirmPassword.message}</p>
                    }

                    <button type="submit">Registrarme</button>
                </form>


            </div>
        </section>
    )
}


