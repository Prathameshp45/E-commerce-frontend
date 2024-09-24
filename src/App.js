import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { Userprovider } from './context/userContext';
import DashboardAside from './pages/DashboardAside';


function App() {
  return (
    <>
    <BrowserRouter>

  <Userprovider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path="/dashboard/*" element={<DashboardAside />}></Route>


    </Routes>
    </Userprovider>
    </BrowserRouter>
    </>
    
  );
}

export default App;
