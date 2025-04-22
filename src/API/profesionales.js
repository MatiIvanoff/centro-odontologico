
/* 
    Recorrer los dias disponibles y sus horarios, aquel dia y horario que ya está guardado en la tabla turnos no mostrarlo.
*/
let listadoProfesionales = [
    {
        id:3245,
        nombre: "Juan Perez",
        fotoPerfil: "profesional-1.jpg",
        profesion:"Ortodoncista",
        horariosDisponibles: [
            {dia:'Lunes', horarios:['08:00','08:15','08:20']},
            {dia:'Martes', horarios:['08:00','08:15','08:20','10:15']},
            {dia:'Miércoles', horarios:['08:00','08:15','08:20']},
            {dia:'Jueves', horarios:['08:00','08:15','08:20']},
            {dia:'Viernes', horarios:['08:00','08:15','08:20']},
        ]
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


export const peticionListarProfesionales = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(listadoProfesionales)
        }, 1000)
    })
}