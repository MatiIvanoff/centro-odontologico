let listadoProfesionales = [
    {
        id:3245,
        nombre: "Juan Perez",
        fotoPerfil: "profesional-1.jpg",
        profesion:"Ortodoncista"
    },
    {
        id:785,
        nombre: "Gabriel Rodriguez",
        fotoPerfil: "profesional-2.png",
        profesion:"Odontologo general"
    },
    {
        id:9945,
        nombre: "Maria Gomez",
        fotoPerfil: "profesional-3.png",
        profesion:"Ortodoncista"
    }
]
import axios from "./axios.js";

export const peticionListarProfesionales = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(listadoProfesionales)
        }, 1000)
    })
}

export const peticionListarProfesionalesPorServicio = (id) => axios.get(`profesionales/servicios/${id}`)