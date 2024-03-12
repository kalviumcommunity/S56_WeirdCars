import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  let handleLogout=()=>{
    document.cookie = `username=;expires=`+new Date(2010,0,1).toUTCString
    window.location.reload()
  }
  return (
    <div className='navbar'>
        <nav>
            <div className="logo">
              <Link to="/">
            <img src="../logo.png" alt="" />
              </Link>

            </div>
            <div className="searchbox">
                <input type="text" className='search' />
                <button className='searchbtn'><IoMdSearch /></button>
            </div>
            <div className="login">
              <Link to="/login">
                <button className='loginbtn'>Login</button>
              </Link>
                <button className='registerbtn' onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar