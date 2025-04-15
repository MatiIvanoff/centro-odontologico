import { useForm } from "react-hook-form";
import { peticionLogin } from "../../API/auth";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

export const Login = () => {

  const [errorLogin, setErrorLogin] = useState(null);
  const [usuario, setUsuario] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoadingAuth(true)
    try {
      const response = await peticionLogin(data);
      console.log(response);
      console.log('Logeo exitoso');
      setUsuario(response.data.usuario)
      setErrorLogin(null)
    } catch (error) {
      console.log(error.response.data.message);
      setErrorLogin(error.response.data.message)
    }
    setLoadingAuth(false)

  }


  return (
    <section className='seccion-registro'>
      <div className='contenedor-portada'>
        <img src="/portada-registro.jpg" alt="" />
      </div>

      <div className='contenedor-registro'>
        <h2>Login</h2>

        {
          usuario &&
          <>
            <p>Nombre: {usuario.nombre}</p>
            <p>Email: {usuario.email}</p>
            <p>ID: {usuario.id}</p>
          </>
        }

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
            errorLogin
            &&
            <p className='form-error'>{errorLogin}</p>
          }
          <button type="submit">{loadingAuth ? <ClipLoader /> : 'Ingresar'}</button>
        </form>


      </div>
    </section>
  )
}