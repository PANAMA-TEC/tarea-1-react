import React , {useState} from 'react';
import "./ejemplo1.css"
import Contactos from '../../simples/Contactos/contactos';
import { Contacto } from '../../../clases/contacto.class';



const Ejemplo1 = () => {

   

    const initialState = 0;

    const [contador1, setContador1] = useState(initialState);
    const [contador2, setContador2] = useState(initialState);

    
    const DEFAULT_CONTACT = new Contacto ("Gabriel", "Garcia", "gagarcia@panama-tec.com", false);

    function actualizarContadores (){
        setContador1(contador1 + 1);
        setContador2(contador2 + 1);
    }

    function resetContadores (){
        setContador1(0);
        setContador2(0);
    }
    function multiplicarContadores (){
        setContador1(contador1 * contador2);
        
    }

    return (
        <div className='contenedor'>
            
            <div >CONTADOR 1 = {contador1} </div>
            <div >CONTADOR 2 = {contador2} </div>
            <br></br>

            <Contactos contacto={DEFAULT_CONTACT}></Contactos>
            <Contactos contacto={DEFAULT_CONTACT}></Contactos>

            <button className='button' onClick={actualizarContadores}> INCREMENTAR </button>
            <button className='button' onClick={resetContadores}> RESET </button>
            <button className='button' onClick={multiplicarContadores}> MULTIPLICAR </button>

        </div>
    );
};


export default Ejemplo1;
