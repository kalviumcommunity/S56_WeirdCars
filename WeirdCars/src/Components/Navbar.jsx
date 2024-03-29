import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import Cookies from "js-cookie"
const Navbar = () => {
  let username = Cookies.get('username')
  let navigate = useNavigate()

  let handleLogout=()=>{
    document.cookie = `username=;expires=Sun, 01 Jan 1800 00:00:00 GMT`
    document.cookie = `token=; expires=Sun, 01 Jan 1800 00:00:00 GMT `
    // localStorage.removeItem("currentUser");
    navigate("/")
    
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
              {username==undefined?(<Link to="/login">
                <button className='loginbtn'>Login</button>
              </Link>):(<button className='registerbtn' onClick={handleLogout}>Logout</button>)}
              
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar