import React from 'react'
import { useCart } from '../context/CartContext'
const RemoveCard = (props) => {
    const{cartItems,removeFromCart}=useCart();
  return (
    <div key={props.id} className='card'>
        <h2>{props.title}</h2>
        <img src={props.src} alt={props.title} />
        <p>{props.description}</p>
        <div className='like'>
            <b><p>price:${props.price}</p></b>
            <b><img className='loveicon' src='https://cdn-icons-png.flaticon.com/128/13137/13137626.png' alt="love icon" />{props.rating}</b>
            <button onClick={() => {
                alert("ITEM HAS BEEN REMOVED FROM CART")
                console.log(props);
                console.log(cartItems);

                // Check if items is iterable before calling addToCart
                if (Array.isArray(cartItems)) {
                    removeFromCart(props);
                } else {
                    console.error("Items is not iterable");
                }
            }}>Remove from Cart</button>
        </div>
    </div>
  )
}

export default RemoveCard
