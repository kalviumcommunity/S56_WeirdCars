import React, { useState } from 'react'
import "./Form.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Form = () => {
    const [name,setName] = useState()
    const [year,setYear] = useState()
    const [description,setDescription] = useState()
    const [feature,setFeature] = useState()
    const [image,setImage] = useState()
    const navigate = useNavigate()

    let handleSubmit=(el)=>{
        el.preventDefault()
        // console.log(name,year,description,feature,image)
        axios.post("https://weirdcars.onrender.com/addData",{name,year,description,feature,image})
        .then((res)=>{
            console.log(res)
            navigate("/products")
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div className='formContainer'>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Name' value={name} onChange={(el)=>setName(el.target.value)} />
            <input type="number" placeholder='Enter Year' value={year} onChange={(el)=>setYear(el.target.value)} />
            <textarea name="" id=""  placeholder='Enter Description' value={description} onChange={(el)=>setDescription(el.target.value)}></textarea>
            <textarea name="" id=""  placeholder='Enter Feature' value={feature} onChange={(el)=>setFeature(el.target.value)}></textarea>
            <input type="text" name="" id="" placeholder='Enter Image url'value={image} onChange={(el)=>setImage(el.target.value)} />
            <input type="submit" value="Add" />
        </form>
    </div>
  )
}

export default Form