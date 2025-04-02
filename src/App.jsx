import { Route, Routes } from "react-router"

import { MainHeader } from "./components/MainHeader/MainHeader"
import { Home } from "./pages/Home/Home"
import { Contacto } from "./pages/Contacto/Contacto"
import { Servicios } from "./pages/Servicios/Servicios"
import { NotFound } from "./pages/NotFound/NotFound"



function App() {


  return (
    <>

      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/:categoria" element={<Servicios />} />


        <Route path="/*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
