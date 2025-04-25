import axios from "./axios.js";

export const peticionListarServicios = () => axios.get('servicios')

export const peticionListarServiciosPorCategoria = (categoria) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listadoServicios.filter((element) => { return element.categoria === categoria }))
        }, 1000)
    })
}

export const peticionListarDetalleServicio = (id) => axios.get(`servicios/${id}`)
