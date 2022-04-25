import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../clases/contacto.class';
import './contactos.css'

const Contactos = ({contacto, estado, borrar}) => {
    
    return (
        
        <div className='contacto shadow-sm'>
            
            <div style={{fontSize:'20px'}}>
                { contacto.nombre } { contacto.apellido } <br></br>
            </div>

            <div style={{fontSize:'20px'}}>
                { contacto.email }
            </div>
           
            <div style={{color:'tomato', fontSize:'20px', marginBottom:'20px'}}>
                Estado: {contacto.conectado ? "EN LINEA":"FUERA DE LINEA" }
            </div>
            <div className='row'>
                
                <button  style={{marginRight:'20px', borderRadius:'5px', padding:'10px', fontWeight:'bold'}} onClick={ () => borrar(contacto)  }> 
                
                    ELIMINAR
                
                </button>
                
                <button style={{marginRight:'00px', borderRadius:'5px', padding:'10px', fontWeight:'bold'}}  onClick={ () => estado(contacto)  }> 
                
                    { !contacto.conectado ? "EN LINEA":"FUERA DE LINEA" }
                
                </button>
            </div>
        </div>
    );
};

Contactos.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
    borrar: PropTypes.func.isRequired,
    estado: PropTypes.func.isRequired
};

export default Contactos;
