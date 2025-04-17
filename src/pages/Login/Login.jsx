import { useForm } from "react-hook-form";
import { peticionLogin } from "../../API/auth";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useAuthContext } from "../../context/authContext";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate()
  // al implementar useAuthContext() -> devuelve un objeto con todos los values del contexto Auth, como solo necesito algunas props de ese objeto, lo desestructuro
  const { error, usuario, estaAutenticado, loadingAuth, loginUsuario } = useAuthContext()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await loginUsuario(data)
  }

  useEffect(() => {
    if (estaAutenticado) {
      navigate('/');
    }
  }, [estaAutenticado])

  return (
    <section className='seccion-registro'>
      <div className='contenedor-portada'>
        <img src="/portada-registro.jpg" alt="" />
      </div>

      <div className='contenedor-registro'>
        <h2>Login</h2>

        <p>Ingresa y reserva tus turnos</p>

        <form onSubmit={handleSubmit(onSubmit)}>

          <input type="email" placeholder='Ingrese su email'
            {
            ...register("email", {
              required: "El campo email es obligatorio",
              minLength: {
                value: 8,
                message: "El email debe contener al menos 8 carácteres."
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
              }
            })
            }
          />
          {
            errors.password &&
            <p className='form-error'>{errors.password.message}</p>
          }


          {
            error
            &&
            <p className='form-error'>{error}</p>
          }
          <button type="submit">{loadingAuth ? <ClipLoader /> : 'Ingresar'}</button>
        </form>


      </div>
    </section>
  )
}