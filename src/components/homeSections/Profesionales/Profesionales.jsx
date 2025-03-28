import { useState } from 'react'
import { CardProfesional } from './CardProfesional'
import './Profesionales.css'
import { useEffect } from 'react';
import { peticionListarProfesionales } from '../../../API/profesionales';

export const Profesionales = () => {

    const [listadoProfesionales, setListadoProfesionales] = useState([]);


    useEffect(() => {
        peticionListarProfesionales()
            .then((data) => {
                setListadoProfesionales(data)
            })
            .catch(error => {
                console.log(error);

            })
    }, []);

    return (
        <section className="seccion-profesionales" >
            <h2>Meet Our Specialists</h2>
            <h6>We use only the best quality materials on the market in order to provide the best products to our patients.</h6>
            <div className="container">


                {
                    (listadoProfesionales && listadoProfesionales.length > 0)
                        ? listadoProfesionales.map((profesional) => {
                            return (
                                <CardProfesional key={profesional.id} nombre={profesional.nombre} profesion={profesional.profesion} fotoPerfil={profesional.fotoPerfil} />
                            )
                        })
                        : <p>No hay profesionales disponibles</p>
                }


            </div>
        </section>
    )
}
