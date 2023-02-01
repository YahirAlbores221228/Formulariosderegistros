import '../../assets/Styles/Autobuses.css'
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

    return (  
<form className='Container-form' ref={formDataF} >
<img alt="" className='Logo2'/>
<h2 className='Titulo'>ALTA DE AUTOBUS</h2>
<div className='Container'>

<div className='grupo'>
<input type="text" className='Container-input' name='clave' placeholder=' '/>
<label className='Container-label'>Clave Autobus</label>
</div>

<div className='grupo'>
<input type="numero" className='Container-input'name='placa' placeholder=' ' />
<label className='Container-label' >Placa Autobus</label>
</div>

<div className='grupo'>
<input type="text" className='Container-input' name='numasientos' placeholder=' ' />
<label className='Container-label' >Numero de asientos</label>
</div>

<div className='grupo'>
<input type="date" className='Container-input' name='fecha' placeholder=' ' />
<label className='Container-label'>Fecha de alta</label>
</div>

<div className='grupo'>
<select name='tipo'  className='Container-input'  >
<option value="" >Seleccione una opcion</option>
<option value="Turimosp`+
çm,bnv mxzglñ´ç

54321789¡21  ">Turismo</option>
<option value="Lujo">Lujo</option>
</select>
<label className='Container-label' >Tipo</label>
</div>
<div className='grupo'>
<input type="text" className='Container-input' name='nombre' placeholder=' ' />
<label className='Container-label'>Nombre del chofer</label>
</div>
<div className='grupo'>
<input type="numero" className='Container-input' name='licencia' placeholder=' ' />
<label className='Container-label'>Licencia</label>
</div>

<input onClick={handlerClick} type="submit" value="Dar de alta" className='Input-submit'/>
</div>
</form>

);
}

export default Autobus;