import "./Home.css"
import React, { useState, useEffect } from 'react';



export function Home() {

  const [contador, setContador] = useState(0);

  const [puedeClickear, setPuedeClickear] = useState(true);
  const [tiempoRestante, setTiempoRestante] = useState(60);


  const aumentarContador = () => {
      setContador(contador + 1);
  };


  useEffect(() => {
      let temporizador;

      if (!puedeClickear) {
          temporizador = setTimeout(() => {
              setTiempoRestante(prevTime => prevTime - 1);
          }, 1000);
      }

      return () => clearTimeout(temporizador);
  }, [puedeClickear, tiempoRestante]);

  const handleClick = () => {
      if (puedeClickear) {
          setContador(prevContador => prevContador + 1);
          setPuedeClickear(false);
          setTiempoRestante(60);

          setTimeout(() => {
              setPuedeClickear(true);
          }, 60000);
      }
  };


    return (
    
        <div class="home">
        <div class="publicidad-izquierda">
  <div>

  <h1> publicidad izquierda</h1>
  </div>
        

          </div>
        <div class="boton-central">

        <div className="contador"> <h3 > Haz ganado {contador} tokens de shiba</h3>  </div>

        <div> 
          <button className="boton" onClick={() => { aumentarContador(); handleClick(); }} disabled={!puedeClickear}>
  Gana</button>   
  
  </div>
        
        <div className="temporizador"> {!puedeClickear && <p>Gana mas en {tiempoRestante} segundos</p>}     </div>
                
  </div>

  <div class="publicidad-derecha">

 <h1> publicidad derecha</h1>
</div>


</div> )}




export default Home;