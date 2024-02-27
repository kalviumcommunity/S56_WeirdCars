import React from 'react'
import { IoMdSearch } from "react-icons/io";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <div className="logo">
            <img src="../logo.png" alt="" />

            </div>
            <div className="searchbox">
                <input type="text" className='search' />
                <button className='searchbtn'><IoMdSearch /></button>
            </div>
            <div className="login">
                <button className='loginbtn'>Login</button>
                <button className='registerbtn'>Register</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar