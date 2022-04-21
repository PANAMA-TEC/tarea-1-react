import React from 'react';
import { Contacto } from '../../../clases/contacto.class';
import Contactos from '../../simples/Contactos/contactos';
import './ListaContactos.css';

const Listacontactos = () => {
    
    const DEFAULT_CONTACT = new Contacto ("Gabriel", "Garcia", "gagarcia@panama-tec.com", false);
    
    return (
        <div className='lista-contactos'>
            
            <h1 className='titulo-contactos'> LISTA DE CONTACTOS</h1>
            <Contactos contacto={DEFAULT_CONTACT}></Contactos>
        
        </div>
    );
}

export default Listacontactos;
