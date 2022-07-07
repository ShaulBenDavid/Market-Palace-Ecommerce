import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Routes/Navigation/Navigation';
import About from './Components/Routes/About/About';
import Home from './Components/Routes/Home/Home';
import Auth from './Components/Routes/Authentication/Auth';
import Shop from './Components/Routes/Shop/Shop';
import Checkout from './Components/Routes/Checkout/Checkout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='auth' element={<Auth/>}/>
        <Route path='Checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
