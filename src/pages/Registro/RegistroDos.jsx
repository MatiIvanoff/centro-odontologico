import { useEffect, useState } from 'react'
import './Registro.css'
import { useForm } from 'react-hook-form'
import { peticionRegister } from '../../API/auth';
import { useAuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router';

export const RegistroDos = () => {
    const navigate = useNavigate()

    const {registroUsuario, error, loadingAuth, estaAutenticado} = useAuthContext()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,15}$/


    const onSubmit = async (data) => {
        
        registroUsuario(data)

    }

    useEffect(() => {
        if(estaAutenticado) {
            navigate("/perfil")
        }
    },[estaAutenticado])


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
                                message: "El nombre debe contener al menos 4 carácteres."
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
                                message: "El email debe contener al menos 8 carácteres."
                            },
                            pattern: {
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
                            minLength: {
                                value: 6,
                                message: "La contraseña debe contener al menos 6 carácteres."
                            },
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
                        ...register("passwordConfirm", {
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
                        errors.passwordConfirm &&
                        <p className='form-error'>{errors.passwordConfirm.message}</p>
                    }
                    {
                    error &&
                    <p className='form-error'>{error}</p>
                    }
                    <button type="submit">{loadingAuth ? 'Cargando ...' : 'Registrar'}</button>
                </form>


            </div>
        </section>
    )
}


