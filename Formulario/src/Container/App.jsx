import Login from '../Pages/Login';
import Registro from '../Pages/Registro';
import Autobus from '../Pages/Autobus';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
    return ( 
<BrowserRouter>
        <Routes>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Registro" element={<Registro/>}/>
            <Route path="/" element={<Autobus/>}/>
        </Routes>
        </BrowserRouter>
 );
}

export default App;