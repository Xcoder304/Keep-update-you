import React from 'react'
import { Link } from 'react-router-dom'
class Header extends React.Component{
    render(){
        return(
<nav className="navbar navbar-expand-lg navbar-light bg-light Black px-2 py-3">
  <div className="container-fluid">
    <a className="navbar-brand fw-bolder fs-4 me-5 ColorWhite" href="#">Keep Update You</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-6">
        <li className="nav-item">
          <a className="nav-link active ColorWhite" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle ColorWhite" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categroys
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item text-capitalize" to='/'>business</Link></li>
            <li><hr className="dropdown-divider" /></li>

            <li><Link className="dropdown-item text-capitalize" to='/entertainment'>entertainment</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item text-capitalize " to='/general'>general</Link></li>
            <li><hr className="dropdown-divider" /></li>

            <li><Link className="dropdown-item text-capitalize" to='/health'>health</Link></li>
            <li><hr className="dropdown-divider" /></li>

            <li><Link className="dropdown-item text-capitalize" to='/science'>science</Link></li>
            <li><hr className="dropdown-divider" /></li>
            
            <li><Link className="dropdown-item text-capitalize" to='/sports'>sports</Link></li>
            <li><hr className="dropdown-divider" /></li>

            <li><Link className="dropdown-item text-capitalize" to='/technology'>technology</Link></li>

          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle ColorWhite" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Selete Your Contry
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item  text-uppercase" href="#">Usa</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item  text-uppercase" href="#">india</a></li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link ColorWhite" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ColorWhite" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        )
    }
}

export default Header