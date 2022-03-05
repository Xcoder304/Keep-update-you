import React from 'react'
import { Link } from 'react-router-dom'

const CategroyDropDown = () =>{
    return(
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
    )
}


// country DropDown
const CountryDropDown = () =>{
  return(
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><a className="dropdown-item  text-uppercase" href="#">Usa</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item  text-uppercase" href="#">india</a></li>
  </ul>
  )
}


export {CategroyDropDown ,CountryDropDown}