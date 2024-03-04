import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import "./Products.css"
import Card from '../Components/Card'
// import data from "../data.json"
import axios from "axios"
import {Link} from "react-router-dom"

const Products = () => {
  // console.log(data[0])
  const [data,setData] = useState([])

  useEffect(()=>{
    axios.get("https://weirdcars.onrender.com/getuser").then((res)=>{
    console.log(res.data)
    setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div >
        <Navbar/>
        <div className='product-container'>
          <div className='addbtn'>
        <Link to="/add"><button>Add +</button> </Link>
          </div>
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