import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from './Utils/FireBase/FIreBase';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './Store/User/User.action';

import Navigation from './Routes/Navigation/Navigation';
import About from './Routes/About/About';
import Home from './Routes/Home/Home';
import Auth from './Routes/Authentication/Auth';
import Shop from './Routes/Shop/Shop';
import Checkout from './Routes/Checkout/Checkout';

import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='auth' element={<Auth/>}/>
        <Route path='Checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
