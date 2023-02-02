import '../../assets/Styles/Login.css'
import {Link} from "react-router-dom";
import {useNavigate } from "react-router-dom";
import Logo from '../../assets/Img/autoplus.svg'
import { useRef } from "react";

function Login() {
const navigate = useNavigate()
    const handlerClick=(e)=>{
        e.preventDefault();
       navigate("/Registro")
    }
const navigateautobus = useNavigate()
    const altaautobus=(e)=>{
        e.preventDefault();
       navigateautobus("/Autobus")
    }

const formDataF = useRef();
const inicio=(e)=>{
e.preventDefault();
const formData = new FormData (formDataF.current)
const URI ="http://34.225.239.102/api/iniciar"
let options ={
method: 'POST',
headers:{"Content-Type":'application/json'},
body:JSON.stringify({
 "usuario": formData.get('usuario') ,
  "contrasenia":  formData.get('contrasenia')
})
}
fetch(URI,options)
.then(Response=>Response.json())
.then(data=>{alert(JSON.stringify(data))})
}
    return (  
<form className='Login' ref={formDataF}>
<img src={Logo} alt="" className='Logo' />
<h2 className='For_titulo'>Inicia sesion</h2>
<div className='Containers'>
<label htmlFor="">Usuario</label>
<input type="text"  className='Form-input' name='usuario' placeholder='Ingrese su usuario'/>
<label htmlFor="">Contraseña</label>
<input type="Password" id='password' name='contrasenia' className='Form-input' placeholder='Ingrese su contraseña'/>

<button onClick={inicio} type="Submit" className='Form-submit'>Iniciar sesion</button>

<Link to="Registro"> 
<p onClick={handlerClick}>Registrarme</p>
</Link>
<Link to="Autobus"> 
<p onClick={altaautobus}>Dar de alta</p>
</Link>
</div>
</form>
);
}
export default Login;