import { Banner } from "./components/homeSections/Banner/Banner"
import { Profesionales } from "./components/homeSections/Profesionales/Profesionales"
import { Servicios } from "./components/homeSections/Servicios/Servicios"
import { MainHeader } from "./components/MainHeader/MainHeader"



function App() {


  return (
    <>

      <MainHeader />

      <Banner />
      <Servicios />
      <Profesionales />

    </>
  )
}

export default App
