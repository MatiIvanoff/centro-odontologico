/* PETICIONES PARA EL MANEJO DE USUARIOS: LOGIN, REGISTRO, ETC.. */

import axios from "./axios.js";

export const peticionLogin = (user) => axios.post('login', user); 
export const peticionRegister = (user) => axios.post('registro', user); 

/*
export const peticionLogin = async (user) => {
    const response = await fetch('https://testingnode-hvci.onrender.com/api/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    const data = await response.json();
    return data;
}*/