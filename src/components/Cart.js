import React, { useState,useEffect } from 'react';
import RemoveCard from './RemoveCard';
import { useCart } from '../context/CartContext';
import {getDocs,doc,collection,query,where} from 'firebase/firestore'
import {db,auth} from './firebaseconfig'
import "./Cart.css"
const Cart = () => {
    const [data,setData]=useState([]);
    const { cartItems } = useCart();
    const collectionRef=collection(db,'items')
    // console.log(cartItems);
    var sum=0;
    const getData=()=>{
        console.log("hello")
    }
    useEffect=(()=>{
        getData();
    },[])
    return (
        <div className='main2'>{cartItems.length>0?<div>
            <div className='cart'>
                {
                cartItems.map((eachitem) => {
                    sum+=eachitem.price;
                    console.log(eachitem);
                    return (
                        <RemoveCard
                            key={eachitem.id}
                            id={eachitem.id}
                            title={eachitem.title}
                            description={eachitem.description}
                            price={eachitem.price}
                            rating={eachitem.rating}
                            src={eachitem.src}
                        />
                    );
                })}
                {/* {
                    data.map((eachitem)=>{
                        sum+=eachitem.price;
                        <RemoveCard
                            key={eachitem.id}
                            id={eachitem.id}
                            title={eachitem.title}
                            description={eachitem.description}
                            price={eachitem.price}
                            rating={eachitem.rating}
                            src={eachitem.src}
                        />
                    })
                } */}
            </div>
            <div className='total'>
                <b>Total Items cost: {sum}</b>
            </div>

        </div>:
            <b>YOUR CART IS EMPTY</b>
        }
        </div>
    );
};

export default Cart;