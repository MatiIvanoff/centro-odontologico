
let listadoServicios = [
    {
        id: 321,
        titulo: "Root Canal Treatment",
        descripcion: "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
        imagen: "conducto.svg",
        categoria: 'Odontología'
    },
    {
        id: 691,
        titulo: "Cosmetic Dentist",
        descripcion: "Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.",
        imagen: "cosmetica.svg",
        categoria: 'Odontología'
    },
    {
        id: 231,
        titulo: "Dental Implants",
        descripcion: "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
        imagen: "implante.svg",
        categoria: 'Odontología'
    },
    {
        id: 9931,
        titulo: "Kinesiología",
        descripcion: "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
        imagen: "massage.svg",
        categoria: 'Traumatología'
    },

    {
        id: 14231,
        titulo: "Radiografías",
        descripcion: "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
        imagen: "bone.svg",
        categoria: 'Placas'
    },

    {
        id: 35231,
        titulo: "Asesoramiento nutricional",
        descripcion: "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
        imagen: "apple.svg",
        categoria: 'Nutrición'
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