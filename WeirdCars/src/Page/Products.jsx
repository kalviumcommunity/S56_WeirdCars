import React from 'react'
import Navbar from '../Components/Navbar'
import "./Products.css"
import Card from '../Components/Card'
import data from "../data.json"

const Products = () => {
  // console.log(data[0])
  return (
    <div >
        <Navbar/>
        <div className='product-container'>
          {
            data.map((el,i)=>{
              return <Card key={i} name={el.Name} year ={el.Year} description ={el.Description} feature = {el.Feature} image={el.image}/>
            })
          }

        </div>
    </div>
  )
}

export default Products