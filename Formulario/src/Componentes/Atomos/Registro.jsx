import '../../assets/Styles/Registro.css'
import Logo from "../../assets/Img/autoplus.svg"
function Registro() {
    return ( 

<form className='Form'>
<img src={Logo} className='Logo'/>
<h2 className='Form_title'>Bienvenido registrate</h2>

<div className='Form_container'>
<div className='Form_group'>
<input type="text" id='name' className='form_input' placeholder=' ' />
<label for="name" className='form_label'>Nombre</label>
</div>
<div className='Form_group'>
<input type="text" id='user' className='form_input' placeholder=' ' />
<label for="user" className='form_label'>Usuario</label>
</div>
<div className='Form_group'>
<input type="text" id='gmail' className='form_input' placeholder=' ' />
<label for="gmail" className='form_label'>Gmail</label>
<span className='form_line'></span>
</div>
<div className='Form_group'>
<input type="password" id='Password' className='form_input' placeholder=' ' />
<label for="Password" className='form_label'>Contraseña</label>
</div>
<button  type="submit" className='form_submit'>Registro</button>
</div>
</form>

 );
}
export default Registro;