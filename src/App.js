import React, { createContext , useReducer} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar';
import {Route , Routes} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import "./App.css";
import Logout from './components/Logout';
import { initialState , reducer } from './reducer/UseReducer';

export const UserContext = createContext();

const Routing  = () => {
  return(
    <Routes>
    <Route exact path='/' element={ <Home/>}/>
     
     <Route  path='/about' element={ <About/>}/>

     <Route  path='/contact' element={ <Contact/>}/>
       
     <Route  path='/login' element={ <Login/>}/>
      
     <Route  path='/signup' element={ <Signup/>}/>

     <Route  path='/logout' element={ <Logout/>}/>

     <Route path="*" element={<ErrorPage/>} />
    </Routes>
  )
}; 

const App = () => {
  const [state, dispatch] = useReducer(reducer , initialState );

   return (
    <>

    <UserContext.Provider value={{state , dispatch}}>
      <Navbar/>
      <Routing/>
    </UserContext.Provider>
     
    </>
  )
}

export default App