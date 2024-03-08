import {useState} from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [username,setName] = useState()
    const [password,setYear] = useState()
    const navigate = useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault()
        document.cookie = `username=${username};expires=` +new Date(2030,0,1).toUTCString
        navigate("/")
    }
  return (
    <div className='LoginformContainer'>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter UserName' value={username} onChange={(el)=>setName(el.target.value)} />
        <input type="password" placeholder='Enter Password' value={password} onChange={(el)=>setYear(el.target.value)} />
        <input type="submit" value="Login" />
    </form>
</div>
  )
}

export default Login