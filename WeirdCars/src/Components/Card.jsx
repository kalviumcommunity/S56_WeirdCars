import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from "js-cookie"
const Card = (props) => {
  let {name, year, description, feature, image} = props.props
console.log(Image)
let username = Cookies.get('username')
  const handleDelete=(id)=>{
    axios.delete("https://weirdcars.onrender.com/deleteuser/"+id)
    .then(res=>{
      window.location.reload()
      console.log(res)
  })
    .catch(err=>console.log(err))

  }
  return (
    <div className='card'>
      <div className='details'>
        <h1>{name}</h1>
        <hr />
        <h2>Year: {year}</h2>
        <p>{description}</p>
        <h3>Weird Feature: {feature}</h3>
        {username == undefined ?(<div></div>):(        <div className='card-icons'>
        
        <Link to={`/update/${props.props._id}`}><button className='update'>Update</button></Link>
        <button className='delete' onClick={(e)=> handleDelete(props.props._id)}>Delete</button>
        
        </div>)}

      </div>

      <div className='Carimg'>
        <img src={image} alt="Car image" />
      </div>
    </div>
  )
}

export default Card