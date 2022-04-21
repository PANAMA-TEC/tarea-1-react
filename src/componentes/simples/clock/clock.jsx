import React, { useState, useEffect } from 'react';

const Clock = () => {
    

    const initialtate = {
        
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
     
    };
    
     const [state, setState] = useState(initialtate);
   
    useEffect(() => {
        
        const timerID = setInterval ( () => { tick() } , 1000 );

        return () => {
            clearInterval (timerID);
        };

    }, []);
 
    return (
        <div>

            <h2> Hora Actual: {state.fecha.toLocaleTimeString()} </h2>
            <h3> {state.nombre} {state.apellidos} </h3>
            <h1> Edad: {state.edad} </h1>

        </div>
    )

    function tick(){
        
        setState((prevtate) => {
           
            let edad = prevtate.edad +1;
           
            return {
              ...prevtate,
              fecha: new Date(),
              edad
           }

        });

     }

   
   
   
}

export default Clock;


