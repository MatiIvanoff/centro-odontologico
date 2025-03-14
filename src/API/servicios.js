
let listadoServicios = [
    {
        id: 321,
        titulo: "Root Canal Treatment",
        descripcion: "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
        imagen: "conducto.svg",
        favorito: true
    },
    {
        id: 691,
        titulo: "Cosmetic Dentist",
        descripcion: "Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.",
        imagen: "cosmetica.svg",
        favorito: false
    },
    {
        id: 231,
        titulo: "Dental Implants",
        descripcion: "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
        imagen: "implante.svg",
        favorito: false
    },
]

export const peticionListarServicios = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(listadoServicios)
        }, 1000)
    })
}