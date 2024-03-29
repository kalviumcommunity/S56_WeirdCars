import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import "./Products.css"
import Card from '../Components/Card'
// import data from "../data.json"
import axios from "axios"
import {Link} from "react-router-dom"
import {ThreeDots} from 'react-loader-spinner'

const Products = () => {
  // console.log(data[0])
  const [data,setData] = useState([])
  const [users,setusers] = useState([])
  const [filtervalue,setfilterValue] = useState('All')
  const [loader,setLoader] = useState(true)

  useEffect(()=>{
    axios.get("https://weirdcars.onrender.com/getuser").then((res)=>{
    // console.log(res.data)
    setData(res.data)
    }).catch((err)=>{
      console.log(err)
    }).finally(()=>{
      setLoader(false)
    })

    axios.get(("https://weirdcars.onrender.com/userinfo")).then((res)=>{
      // console.log(res.data)
      setusers(res.data)
    })
    .catch((err)=>console.log(err))
  },[])

  let filterData = data.filter((el) => {
    if(filtervalue =="All"){
      return el
    }
    else{
      return el.createdby == filtervalue
    }
	})
  return (

    <div >
      <Navbar/>
      {loader ==false ?(        <div className='product-container'>
          <div className='addbtn'>
        <Link to="/add"><button>Add +</button> </Link>

          </div>
          <div className="filterbox">
    <label htmlFor="">Filter:   </label>
        <select name="Filter" id="Filter" className='Filter' onChange={(e) =>setfilterValue(e.target.value)}>
          <option value="All">All</option>
          {users.map((el,i)=>{
            return <option key={i} value={el.username}>{el.username}</option>
          })}
        </select>
          </div>
          {
  filterData.length > 0 ? (
    <div>
      {filterData.map((el, i) => {
        return <Card key={i} props={el} />;
      })}
    </div>
  ) : (
    <div>
      No data available.
    </div>
  )
}
        </div>):( <div className='loadercontainer'>     <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </div>)}


    </div>
  )
}

export default Products