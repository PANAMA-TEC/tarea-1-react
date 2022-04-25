import React , {useState} from 'react';
import { Contacto } from '../../../clases/contacto.class';
import Contactos from '../../simples/Contactos/contactos';
import Formulariocontactos from '../../simples/Formularios/formularioContactos/formularioContactos';
import './ListaContactos.css';

const Listacontactos = () => {
    
    const DEFAULT_CONTACT_1 = new Contacto ("Gabriel", "Garcia", "gagarcia@panama-tec.com", true);
    const DEFAULT_CONTACT_2 = new Contacto ("Gabriela", "Garcia", "gagarcia@panama-tec.com", true);
    const DEFAULT_CONTACT_3 = new Contacto ("Gabriele", "Garcia", "gagarcia@panama-tec.com", false);

    const [contact, setContactos] = useState([DEFAULT_CONTACT_1, DEFAULT_CONTACT_2, DEFAULT_CONTACT_3]);
   

    function borrarContacto(contacto){
        
        
        const tempTasks = [...contact];
        tempTasks.splice(contacto,1);
        setContactos(tempTasks);
    }

    function actualizarEstado(contacto){
        
        const index = contact.indexOf(contacto);
        const tempTasks = [...contact];
        tempTasks[index].conectado = !tempTasks[index].conectado;
        setContactos(tempTasks);
    }

    function agregarTareas(contacto){
        
        try{
            const tempTasks = [...contact];
            tempTasks.push(contacto);
            setContactos(tempTasks);
        }catch(e){
            console.log(e);

        }
              
        
    }

    

    return (
        <div className='lista-contactos'>
            <div className='col-12 col-md-8 offset-md-2 col-xl-4 offset-xl-4'>
                <h1 className='titulo-contactos col-12'> LISTA DE CONTACTOS</h1>
                
                {
                    contact.map( (contactos, index) => {
                        
                        return (
                            
                            <Contactos className='col-12' contacto={contactos} index={index} borrar = { borrarContacto }  estado = { actualizarEstado }> </Contactos>
                            
                        )
                    })
                } 

               
            </div>
            
            <Formulariocontactos tareasActuales={contact.length} agregarTarea={agregarTareas}> </Formulariocontactos>


          
        </div>
    );
}

export default Listacontactos;
