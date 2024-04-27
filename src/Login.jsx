import "./Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export function Login (setUser){

const [nombre,setnombre]=useState ("") 

const [contraseña,setcontraseña]=useState ("")

const [error,seterror]= useState(false)


const handleClick = () => {
    const navigate = useNavigate();
    navigate("/Home");
  };


const handlesubmit = (e) => {

e.preventDefault()

if (nombre == "" || contraseña == "") {

seterror (true)
return    
}

seterror(false)


setUser([nombre])

}

return(

<div className="Login"> 

<section>

<h1>
Inicio de sesion
</h1>

<form  class="Login" onSubmit={handlesubmit}>

<input type="text" value={nombre} onChange={e => setnombre(e.target.value)} 

placeholder="Nombre de usuario"

/> 

<input type="password"  value={contraseña} onChange={e => setcontraseña (e.target.value)}

placeholder="Contraseña"

/> 



<button onClick={handleClick}>
  
<li>
          <NavLink to="/Home">Home</NavLink>
        </li>
  
  </button>


</form>

{error && <p>Todos los campos son obligatorios</p>}
</section>



</div>



)


}



export default Login;