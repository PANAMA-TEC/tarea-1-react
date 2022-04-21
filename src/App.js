import { useEffect } from 'react';
import './App.css';
import Listacontactos from './componentes/contenedores/ListaContactos/ListaContactos';

import Clock from './componentes/simples/clock/clock'



function App() {
  
  return (
    <div className="App" >
      <header className="App-header">
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
