import '../../assets/Styles/Login.css'
import {Link} from "react-router-dom";
import {useNavigate } from "react-router-dom";
import Logo from '../../assets/Img/autoplus.svg'
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
    return (  
<form className='Login'>
<img src={Logo} alt="" className='Logo' />
<h2 className='For_titulo'>Inicia sesion</h2>
<div className='Containers'>
<label htmlFor="">Usuario</label>
<input type="text"  className='Form-input' placeholder='Ingrese su usuario'/>
<label htmlFor="">Contraseña</label>
<input type="Password" id='password' className='Form-input' placeholder='Ingrese su contraseña'/>
<input type="Submit" className='Form-submit' value="Iniciar sesion" />

<Link to="Registro"> 
<p onClick={handlerClick}>Registrame</p>
</Link>
<Link to="Autobus">
<p onClick={altaautobus}>Dar de alta Autobus</p>
</Link>
</div>
</form>
);
}
export default Login;