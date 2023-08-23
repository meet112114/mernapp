import React , {useContext} from 'react'
import "../css/Signup.css"
import "bootstrap/dist/css/bootstrap.css"
import { NavLink } from 'react-router-dom'
import { UserContext } from '../App'

const Navbar = () => {
  const  {state , dispatch} = useContext( UserContext);

  const RenderMenu = () => {
    if(state) {
      return(
        <>
          <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
        </>
      )
    }else{
      return(
        <>
          <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Signup">Registartion</NavLink>
        </li>
        </>
      )
    }
  }

  return (
   <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav1">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Meet.$</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <RenderMenu/>

      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar