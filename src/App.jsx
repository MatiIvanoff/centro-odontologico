import { Route, Routes } from "react-router"

import { MainHeader } from "./components/MainHeader/MainHeader"
import { Home } from "./pages/Home/Home"
import { Contacto } from "./pages/Contacto/Contacto"
import { Servicios } from "./pages/Servicios/Servicios"
import { NotFound } from "./pages/NotFound/NotFound"
import { DetalleServicio } from "./pages/DetalleServicio/DetalleServicio"
import { Registro } from "./pages/Registro/registro"
import { RegistroDos } from "./pages/Registro/RegistroDos"
import { Login } from "./pages/Login/Login"
import { AuthProvider } from "./context/authContext"
import { PerfilPage } from "./pages/PerfilPage/PerfilPage"
import { RutasProtegidas } from "./RutasProtegidas"



function App() {

  return (
    <AuthProvider>

      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/:categoria" element={<Servicios />} />
        <Route path="/servicio/:id" element={<DetalleServicio />} />


        <Route path="/registro" element={<RegistroDos />} />
        <Route path="/login" element={<Login />} />


        <Route element={<RutasProtegidas />}>
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/mis-turnos" element={<PerfilPage />} />
        </Route>



        <Route path="/*" element={<NotFound />} />


      </Routes>

    </AuthProvider>
  )
}

export default App
