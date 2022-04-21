import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../clases/contacto.class';
import './contactos.css'

const Contactos = ({contacto}) => {
    
    return (
        <div className='contacto'>
            <h2>
                Nombre: {contacto.nombre } 
            </h2>

            <h2>
                Apellido: {contacto.apellido }
            </h2>

            <h2>
                Email: {contacto.email }
            </h2>

            <h2>
                Estado: {contacto.conectado ? "EN LINEA":"FUERA DE LINEA" }
            </h2>
            
        </div>
    );
};


Contactos.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)

};


export default Contactos;
