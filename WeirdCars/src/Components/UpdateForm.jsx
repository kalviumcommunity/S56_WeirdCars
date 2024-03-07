import React, { useEffect } from 'react'
import "./UpdateForm.css"
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"

const UpdateForm = () => {
    const [name,setName] = useState()
    const [year,setYear] = useState()
    const [description,setDescription] = useState()
    const [feature,setFeature] = useState()
    const [image,setImage] = useState()
    
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)

    useEffect(()=>{

        // el.preventDefault()
        axios.get("https://weirdcars.onrender.com/getdata/"+id)
        .then((res)=>{
            console.log(res) 
            setName(res.data.name)
            setYear(res.data.year)
            setDescription(res.data.description)
            setFeature(res.data.feature)
            setImage(res.data.image)
        })
        .catch((err)=>console.log(err))
    })

    
    let handleSubmit=(el)=>{
        el.preventDefault()
        axios.put("https://weirdcars.onrender.com/updatedata/"+id,{name,year,description,feature,image})
        .then((res)=>{
            console.log(res)
            navigate("/products")
        })
        .catch((err)=>console.log(err))

    }
  return (
    <div className='updateformContainer'>
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

export default UpdateForm