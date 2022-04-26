import React , { useRef,useState }from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../../clases/contacto.class';




const Formulariocontactos = ({ tareasActuales , agregarTarea }) => {

    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');
    
    const [formularioVisible,setFVisible] = useState(false);
   
    function crearContacto(e){
        
        e.preventDefault();

        const contactoNuevo = new Contacto(
            
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false,

        );
        
        agregarTarea(contactoNuevo);
       
    }

   function mostrarFormulario(){

       setFVisible(!formularioVisible);

    }
    
    return (
        <form className='shadow-sm' style={{ borderRadius:'10px' }} onSubmit={ crearContacto } >
            <div className='shadow-sm' style={{ backgroundColor:'#303F9F',padding:'10px', borderRadius:'10px' }}>
                <label  class="col-12 col-form-label align-middle" style=  {{ color:'white',   padding:'15px', fontWeight:'bold' }}  for="staticEmail" >
                    <div className='row'>
                        
                        <div className='col-12'>FORMULARIO DE INTRODUCCIÓN DE CONTACTOS</div>
                        
                        <div className='row' onClick={ () => mostrarFormulario() } style={{cursor:'pointer', margin:'0px', padding:'0px', fontSize:'14px'}}>
                            
                            <div className='col-8 mt-4 offset-3' style={{textAlign:'right'}}> DESPLEGAR FORMULARIO</div>
                            <i  class=" bi bi-arrow-down-circle-fill col-1 mt-4" ></i>

                        </div> 

                    </div>
                </label>

                <div className={ formularioVisible ? 'd-block':'d-none' }  style={ {  backgroundColor:'white', borderRadius:'10px', padding:'15px'}}>
                    
                    <input ref={nombreRef} id='inputName' type='text' className=' col-12 form-control-lg mb-3 ' required autoFocus placeholder='nombre'/>
                    <input ref={apellidoRef} id='inputApe' type='text' className='col-12 form-control-lg mb-3' required autoFocus placeholder='apellido'/>
                    <input ref={emailRef} id='email' type='text' className=' col-12 form-control-lg mb-4' required placeholder='email'/>
                    
                    <button type='submit' className='col-6 offset-6 btn-primary' style={{padding:'20px', fontWeight:'bold', borderRadius:'5px'}}>
                            
                            { tareasActuales > 0 ? 'Agregar Contacto Nuevo' : 'Crear Primera Contacto'}
                        
                    </button> 

                </div>
            </div>
        </form>
    );
}

Formulariocontactos.protoType = {
    
    tareasActuales: PropTypes.number.isRequired,
    agregarTarea: PropTypes.func.isRequired

}

export default Formulariocontactos;
