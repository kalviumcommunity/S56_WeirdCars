import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import "./Products.css"
import Card from '../Components/Card'
// import data from "../data.json"
import axios from "axios"

const Products = () => {
  // console.log(data[0])
  const [data,setData] = useState([])

  useEffect(()=>{
    axios.get("https://weirdcars.onrender.com/getuser").then((res)=>{
    console.log(res.data)
    setData(res.data)
    })
  },[])
  return (
    <div >
        <Navbar/>
        <div className='product-container'>
          {
            data.map((el,i)=>{
              return <Card key={i} props={el}/>
            })
          }

        </div>
    </div>
  )
}

export default Products