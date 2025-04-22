
let listadoServicios = [
    {
        id: 321,
        titulo: "Tratamiento de conducto",
        descripcion: "El tratamiento de conductos radiculares (endodoncia) es un procedimiento odontológico utilizado para tratar la infección en el centro de un diente.",
        imagen: "conducto.svg",
        categoria: 'Odontología',
        profesionales_asociados: ['3123123', '3123', '55666']
    },
    {
        id: 691,
        titulo: "Odontología cosmética",
        descripcion: "La odontología cosmética es la rama de la odontología que se centra en mejorar el aspecto de su sonrisa.",
        imagen: "cosmetica.svg",
        categoria: 'Odontología',
        dias_atencion: [
            {
                dia: 'Lunes',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            },
            {
                dia: 'Miércoles',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            }
            ,
            {
                dia: 'Viernes',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            }
        ]
    },
    {
        id: 231,
        titulo: "Implante dental ",
        descripcion: "Un implante dental es una raíz dental artificial que se coloca en la mandíbula para sostener un diente o puente protésico",
        imagen: "implante.svg",
        categoria: 'Odontología',
        dias_atencion: [
            {
                dia: 'Lunes',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            },
            {
                dia: 'Miércoles',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            }
            ,
            {
                dia: 'Viernes',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            }
        ]
    },
    {
        id: 9931,
        titulo: "Kinesiología",
        descripcion: "La kinesiología es una disciplina de la salud que se centra en el estudio del movimiento humano y su relación con la salud y el bienestar.",
        imagen: "massage.svg",
        categoria: 'Traumatología',
        dias_atencion: [
            {
                dia: 'Lunes',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            },
            {
                dia: 'Miércoles',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            }
            ,
            {
                dia: 'Viernes',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            }
        ]

    },

    {
        id: 14231,
        titulo: "Radiografías",
        descripcion: "Una radiografía es un estudio de diagnóstico por imágenes que utiliza rayos X, una forma de radiación electromagnética, para crear imágenes del interior del cuerpo.",
        imagen: "bone.svg",
        categoria: 'Placas',
        dias_atencion: [
            {
                dia: 'Lunes',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            },
            {
                dia: 'Miércoles',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            }
            ,
            {
                dia: 'Viernes',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            }
        ]
    },

    {
        id: 35231,
        titulo: "Asesoramiento nutricional",
        descripcion: "El asesoramiento nutricional es un servicio profesional que te guía para lograr una alimentación saludable y adaptada a tus necesidades individuales.",
        imagen: "apple.svg",
        categoria: 'Nutrición',
        dias_atencion: [
            {
                dia: 'Lunes',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            },
            {
                dia: 'Miércoles',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            }
            ,
            {
                dia: 'Viernes',
                horarios: ['8:00 AM - 10:00 AM', '14:00 PM - 18:00 AM']
            }
        ]
    },

]

export const peticionListarServicios = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listadoServicios)
        }, 1000)
    })
}

export const peticionListarServiciosPorCategoria = (categoria) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listadoServicios.filter((element) => { return element.categoria === categoria }))
        }, 1000)
    })
}

export const peticionListarDetalleServicio = (id) => {
    return new Promise((resolve, reject) => {
        const servicio = listadoServicios.find((elemento) => elemento.id == id)
        setTimeout(() => {
            if (servicio) {
                resolve(servicio)
            } else {
                reject('Servicio no encontrado')
            }
        }, 1000)
    })
}