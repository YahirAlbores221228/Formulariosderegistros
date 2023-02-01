import '../../assets/Styles/Autobuses.css'
import {useNavigate } from "react-router-dom";

function Autobus() {
const navigate = useNavigate()
    const handlerClick=(e)=>{
        e.preventDefault();
       navigate("/Login")
    }
    return (  

<form className='Container-form' >
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
<select name='tipo' id="" className='Container-input'  >
<option value="" >Seleccione una opcion</option>
<option value="">1. Turismo</option>
<option value="">2. Lujo</option>
</select>
<label className='Container-label' >Tipo</label>
</div>
<div className='grupo'>
<input type="text" className='Container-input' name='nombre' placeholder=' ' />
<label className='Container-label'>Nombre del chofer</label>
</div>
<input onClick={handlerClick} type="submit" value="Dar de alta" className='Input-submit'/>
</div>
</form>

);
}

export default Autobus;