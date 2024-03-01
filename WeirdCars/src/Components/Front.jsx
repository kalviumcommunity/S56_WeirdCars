import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
/**
 * 
 * @returns 
 */
const Front = () => {
  return (
    <div className='home'>
        <h1>Discover the World of Weird Cars</h1>
        <p>Explore a Collection of Unconventional Vehicles</p>
        <div>
          <Link to="/products">
        <button className='explore'>Explore Now</button>
          </Link>
        <button className='learn'>Learn More →</button>

        </div>
    </div>
  )
}

export default Front
