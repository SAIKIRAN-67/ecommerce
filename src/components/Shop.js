import React, { useState, useEffect } from 'react';
import Card from './Card'
import "./Shop.css"
const Shop = () => {
    const [url,setUrl]=useState("https://dummyjson.com/products")
    const [items,setItems]=useState([])
    const fetchurl=async(url)=>{
        let response=await fetch(url);
        let a=await response.json();
        setItems(a.products);
    }
    useEffect(()=>{
      try{
        fetchurl(url);
      }
      catch(error){
        alert(error)
      }
    },[url])
  return (
    <div className='main'>
        <div className='filter'>
            <div className='cat'>
                <h2>ALL CATEGORIES</h2>
            </div>
            <p onClick={()=>{setUrl("https://dummyjson.com/products")}}  value="">ALL</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/smartphones")}}>SMARTPHONES</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/laptops")}}>LAPTOPS</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/mens-watches")}}>MEN'S-WATCHES</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/mens-shirts")}}>MEN'S-SHIRTS</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/mens-shoes")}}>MEN'S-SHOES</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/womens-watches")}}>WOMEN'S-WATCHES</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/womens-jewellery")}}>WOMENS-JEWElLERY</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/womens-shoes")}}>WOMENS-SHOES</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/tops")}}>WOMENS-CLOTHING</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/fragrances")}}>FRAGRANCES</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/skincare")}}>SKINCARE</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/groceries")}}>GROCERIES</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/home-decoration")}}>HOME-DECORATION</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/furniture")}}>FURNITURE</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/lighting")}}>LIGHTING</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/motorcycle")}}>MOTORCYCLE</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/automotive")}}>AUTOMOTIVE</p>
            <p onClick={()=>{setUrl("https://dummyjson.com/products/category/sunglasses")}}>SUNGLASSES</p>
        </div>
        <div className='shop'>
        {items.map((eachitem)=>{
            const {id,title,description,price,rating}=eachitem;
            const src=eachitem.images[0]
            return(
                <Card
                    id={id}
                    title={title}
                    description={description}
                    price={price}
                    rating={rating}
                    src={src}
                />
            )
        })}
        </div>
    </div>
  )
}

export default Shop
