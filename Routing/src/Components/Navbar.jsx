import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
   <ul className='nav-list'>
    <li>
        <Link to="/"  className='nav-item'>Home</Link>
    </li>
    <li>
        <Link to="/about" className='nav-item'>About</Link>
    </li>
   </ul>
    </nav>
  )
}
