import React from 'react'
import "./Card.css"
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdShare } from "react-icons/io";

const Card = (props) => {
  let {name, year, description, feature, image} = props
// console.log(name)
  return (
    <div className='card'>
      <div className='details'>
        <h1>{name}</h1>
        <hr />
        <h2>Year: {year}</h2>
        <p>{description}</p>
        <h3>Weird Feature: {feature}</h3>
        <div className='card-icons'>
        <IoMdHeartEmpty />
        <IoMdShare />
        </div>
      </div>

      <div className='Carimg'>
        <img src="https://www.hagerty.co.uk/wp-content/uploads/2022/03/xoYHC98CnfRAKbhKM58hTKbaSmN4IOx0Dj4HjGx1.jpeg" alt="" />
      </div>
    </div>
  )
}

export default Card