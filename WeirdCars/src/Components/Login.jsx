import {useEffect, useState} from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const Login = () => {
    const [username,setName] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const [users,setusers] = useState([])
    const [userPresence,setuserPresence] = useState(false)
    useEffect(()=>{
      axios.get(("https://weirdcars.onrender.com/userinfo")).then((res)=>{
        // console.log(res.data)
        setusers(res.data)
      })
      .catch((err)=>console.log(err))
    },[])
    let handleSubmit=(e)=>{
        e.preventDefault()
        document.cookie = `username=${username};expires=` +new Date(2030,0,1).toUTCString
        axios.post("https://weirdcars.onrender.com/auth",{username,password})
        .then((res)=>{
            // console.log(res)
            document.cookie = `token=${res.data}; expires=` +new Date(2030,0,1).toUTCString

        })
        .catch((err)=>console.log(err))
        users.map((el)=>{
          if(el.username == username){
            localStorage.setItem("currentUser",username);
            setuserPresence(true)
            return
          }
        })
        if(userPresence == false){
          localStorage.setItem("currentUser",username)
          axios.post("https://weirdcars.onrender.com/addUser",{username})
          .then((res)=>{
            console.log(res)  
            setuserPresence(true)
          })
        }
        navigate("/")
    }
  return (
    <div className='LoginformContainer'>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter UserName' value={username} onChange={(el)=>setName(el.target.value)} />
        <input type="password" placeholder='Enter Password' value={password} onChange={(el)=>setPassword(el.target.value)} />
        <input type="submit" value="Login" />
    </form>
</div>
  )
}

export default Login