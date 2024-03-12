import {useState} from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const Login = () => {
    const [username,setName] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault()
        document.cookie = `username=${username};expires=` +new Date(2030,0,1).toUTCString
        axios.post("https://weirdcars.onrender.com/auth",{username,password})
        .then((res)=>{
            // console.log(res)
            document.cookie = `token=${res.data}; expires=` +new Date(2030,0,1).toUTCString

        })
        .catch((err)=>console.log(err))
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