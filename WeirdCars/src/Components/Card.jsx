import React from 'react'
import "./Card.css"
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdShare } from "react-icons/io";

const Card = (props) => {
  let {Name, Year, Description, Feature, Image} = props.props
console.log(Image)
  return (
    <div className='card'>
      <div className='details'>
        <h1>{Name}</h1>
        <hr />
        <h2>Year: {Year}</h2>
        <p>{Description}</p>
        <h3>Weird Feature: {Feature}</h3>
        <div className='card-icons'>
        <IoMdHeartEmpty />
        <IoMdShare />
        </div>
      </div>

      <div className='Carimg'>
        <img src={Image} alt="Car image" />
      </div>
    </div>
  )
}

export default Card