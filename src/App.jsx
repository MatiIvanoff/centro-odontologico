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
import { EspecialistasServicio } from "./pages/DetalleServicio/EspecialistasServicio/EspecialistasServicio"
import { ServiceProvider } from "./context/ServiceContext"
import { ProfesionalesProvider } from "./context/ProfesionalesContext"
import { Panel } from "./pages/admin/Panel/Panel"
import { RutasProtegidasAdmin } from "./RutasProtegidasAdmin"



function App() {

  return (
    <AuthProvider>
      <ServiceProvider>
        <ProfesionalesProvider>
          <MainHeader />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/:categoria" element={<Servicios />} />
            <Route path="/servicio/:id" element={<DetalleServicio />} />
            <Route path="/turnos" element={<EspecialistasServicio />} />

            <Route path="/registro" element={<RegistroDos />} />
            <Route path="/login" element={<Login />} />


            <Route element={<RutasProtegidasAdmin />}>
              <Route path="/panel" element={<Panel />} />
            </Route>




            <Route path="/*" element={<NotFound />} />


          </Routes>
        </ProfesionalesProvider>
      </ServiceProvider>
    </AuthProvider>
  )
}

export default App
