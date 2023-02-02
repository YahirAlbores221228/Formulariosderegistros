import '../../assets/Styles/Autobuses.css'
import Logo from "../../assets/Img/autoplus.svg"
import { useState } from "react";
import { useRef } from "react";

function Autobus() {

const formDataF = useRef();
const handlerClick=(e)=>{
e.preventDefault();
const formData = new FormData (formDataF.current)
const URI ="http://34.225.239.102/api/autobus/register"
let options ={
method: 'POST',
headers:{"Content-Type":'application/json'},
body:JSON.stringify({
"clave": formData.get('clave') ,
  "placa": formData.get('placa'),
  "numasientos":formData.get('numasientos') ,
  "fecha":formData.get('fecha') ,
  "tipo": formData.get('tipo'),
  "nombre": formData.get('nombre'),
  "licencia": formData.get('licencia')
})
}
fetch(URI,options)
.then(Response=>Response.json())
.then(data=>{alert(JSON.stringify(data))})
    };
const [lincense, setNumero]= useState();
const licencia =(e)=>{
e.preventDefault();
const lincense = Math.floor(Math.random()*100000);
setNumero (lincense);
}

return (  
<form className='Container-form' ref={formDataF} >
<img src={Logo} className='Logo2'/>
<h2 className='Titulo'>ALTA DE AUTOBUS</h2>

<div className='Container'>

<div className='Container-dos'>
<div className='grupo'>
<label>Clave Autobus</label>
<input type="text" className='Container-input' name='clave'/>
</div>
<div className='grupo'>
<label>Placa Autobus</label>
<input type="text" className='Container-input'name='placa'/>
</div>
</div>

<div className='Container-tres'>
<div className='grupo'>
<label>Numero de asientos</label>
<input type="number" className='Container-input' name='numasientos'/>
</div>
<div className='grupo'>
<label>Fecha de alta</label>
<input type="date" className='Container-input' name='fecha'/>
</div>
</div>

<div className='grupo'>
<label>Tipo</label>
<select name='tipo'  className='Container-input'  >
<option value="" >Seleccione una opcion</option>
<option value="Turismo">Turismo</option>
<option value="Lujo">Lujo</option>
</select>
</div>

<div className='grupo'>
<label>Nombre del chofer</label>
<input type="text" className='Container-input' name='nombre' />
</div>
<div className='grupo'>
<label >Licencia</label>
<input type="number" className='Container-input' value={lincense}  name='licencia'/>
</div>

<button onClick={licencia}   type="submit"  className='Input-submit'>Generar licencia</button>
<button onClick={handlerClick} type="submit"  className='Input-submit'>Dar de alta</button>
</div>
</form>

);
}

export default Autobus;