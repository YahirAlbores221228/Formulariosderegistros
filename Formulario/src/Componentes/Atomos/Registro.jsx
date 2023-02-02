import '../../assets/Styles/Registro.css'
import Logo from "../../assets/Img/autoplus.svg"
import { useRef } from "react";
function Registro() {
const formDataF = useRef();
const registro=(e)=>{
e.preventDefault();


const formData = new FormData (formDataF.current)
const URI ="http://34.225.239.102/api/registrar/usuario"
let options ={
method: 'POST',
headers:{"Content-Type":'application/json'},
body:JSON.stringify({
 "nombre":  formData.get('nombre'),
  "usuario":  formData.get('usuario'),
  "correo":  formData.get('correo'),
  "contrasenia":  formData.get('contrasenia')
})
}
fetch(URI,options)
.then(Response=>Response.json())
.then(data=>{alert(JSON.stringify(data))})

}
    return ( 

<form className='Form' ref={formDataF}>
<img src={Logo} className='Logo'/>
<h2 className='Form_title'>Bienvenido registrate</h2>

<div className='Form_container'>
<div className='Form_group'>
<input type="text" id='name' name='nombre' className='form_input' placeholder=' ' />
<label for="name" className='form_label'>Nombre</label>
</div>
<div className='Form_group'>
<input type="text" id='user' name='usuario' className='form_input' placeholder=' ' />
<label for="user" className='form_label'>Usuario</label>
</div>
<div className='Form_group'>
<input type="text" id='gmail' name='correo' className='form_input' placeholder=' ' />
<label for="gmail" className='form_label'>Gmail</label>
<span className='form_line'></span>
</div>
<div className='Form_group'>
<input type="password" id='Password' name='contrasenia' className='form_input' placeholder=' ' />
<label for="Password" className='form_label'>Contraseña</label>
</div>
<button onClick={registro} type="submit" className='form_submit'>Registro</button>
</div>
</form>

 );
}
export default Registro;