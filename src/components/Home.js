import React from 'react'
import Navbar from './Navbar'
import {useState,useEffect} from "react"
import "./Home.css"
import {Categories} from "./categories"
import { Link } from 'react-router-dom'
import Imageslider from './Imageslider'
const Home = () => {
  var images=["https://th.bing.com/th/id/OIP.09uF1Zok3o-AiDDCRpjWmAHaEE?w=267&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.AnA-UibQkxbgEy8ZoJ1gnAAAAA?w=253&h=185&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.a-zRQM6Ge63OMhTs-I6W8gHaFj?w=232&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.YxAn44s4aSxIAPEdAEgiwwHaEK?w=279&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.GehiCucdCM0TYqRYrEQ9ggHaEQ?w=272&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.YPJ4HMDTb7JiaH7sROqB2wHaE-?w=270&h=181&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.gFARWQQRqHsXcpaOxAhGJgHaEc?w=234&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.6AU9WEtSI7m0asi9iODrPgHaLH?w=119&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.3rueyOQQgtpAIGpqz5zevQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th?q=Women%27s+Flat+Slip-on+Shoes&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.4&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
                "https://th.bing.com/th/id/OIP.u7mZYKTkPQ_BbE40YV0gEAHaJQ?w=165&h=207&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.2VwL6VG9BjwVLlSUaUWyJQHaD4?w=318&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.Jno_SSHusrkla9uPE0lw8QHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.LEVu0iEZHyN4QvhzlGojWgHaHa?w=225&h=220&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.0LeUFR8ZL6pv2TlWHmXnjwHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.2DIUrNOODenyTqVERbxRiAHaFI?w=297&h=206&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.qVfDzvUwoGRbW42Z7bHB_gHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.rDjOHa8tRbXCnPWjrI1YegHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.FAqizE7D5NaPIshYiAh5kAAAAA?w=248&h=186&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "https://th.bing.com/th/id/OIP.QAQl8klbJQaYQgNr0g_GhwHaHb?w=178&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"]
  const [data,setData]=useState([]);
  const url="https://dummyjson.com/products/categories"
  const fetchurl=async(url)=>{
    let response=await fetch(url);
    let a=await response.json();
    setData(a);
    console.log(a)
  }
  useEffect(()=>{
    fetchurl(url)
  },[])
  const [image,setImage]=useState(images[0])
  return (
    <div>
      <div className='ads'>
        <Imageslider images={Categories}/>
      </div>
      <h1 className='catr'>Shop By Category</h1>
      <div className='Home'>
        {
          data.map((eachitem,i)=>{
          return(
            <div className='category'>
              <Link className='shoplinks' to="/shop">
                <img src={images[i]}/>
                <p>{eachitem}</p>
                <p className='shopnow'>Shop Now</p>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
