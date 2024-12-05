import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='box'>
        <ul>
           <li>
           <NavLink className={({isActive})=>isActive?"gk":" "} to={"/"}>Home</NavLink>
           </li>
           <li>
           <NavLink className={({isActive})=>isActive?"gk":" "} to={"/about"}>about</NavLink>
           </li>
           <li>
           <NavLink className={({isActive})=>isActive?"gk":" "} to={"/dashboard"}>dashboard</NavLink>
           </li>
        </ul>
    </div>
  )
}

export default NavBar