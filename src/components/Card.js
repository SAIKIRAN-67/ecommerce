import React from 'react'
import "./Card.css"
import {auth,db} from './firebaseconfig'
import { useCart } from '../context/CartContext'
import {uploadBytes,getDownloadURL,ref} from 'firebase/storage'
import {addDoc,deleteDoc,collection} from 'firebase/firestore'
import { storage } from './firebaseconfig'
import {useNavigate} from 'react-router-dom'
const Card = (props) => {
  const { id, title, src, description, rating } = props;
  const { cartItems, addToCart } = useCart();
  const collectionRef=collection(db,'items')
  const {authu,setAuthu}=useCart();
  const navigate=useNavigate();
  return (
      <div key={id} className='card'>
          <h2>{title}</h2>
          <img src={src} alt={title} />
          <p>{description}</p>
          <div className='like'>
              <b><p>price:${props.price}</p></b>
              <b><img className='loveicon' src='https://cdn-icons-png.flaticon.com/128/13137/13137626.png' alt="love icon" />{rating}</b>
              <button onClick={async() => {
                    if(authu==false){
                        alert("Login to add Items to Cart")
                        navigate('/Login');
                        return;
                    }
                  alert("ITEM HAS BEEN ADDED TO THE CART")
                  console.log(props);
                  console.log(cartItems);

                  // Check if items is iterable before calling addToCart
                  if (Array.isArray(cartItems)) {
                      addToCart(props);
                      await addDoc(collectionRef,{
                        title:title,
                        src:src,
                        description:description,
                        price:props.price,
                        rating:rating,
                        user:auth.currentUser.email
                     })
                  } else {
                      console.error("Items is not iterable");
                  }
              }}>Add to Cart</button>
          </div>
      </div>
  );
};

export default Card;

