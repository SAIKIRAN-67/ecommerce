import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import {useCart} from '../context/CartContext'
import {signOut} from 'firebase/auth'
import {auth} from './firebaseconfig'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
  const {authu,setAuthu}=useCart();
  const navigate=useNavigate();
  // setInterval(()=>{
  //   let a=document.getElementById('logo');
  //   a.style.color="white"
  //   a.style.border="2px solid white"
  //   setTimeout(()=>{
  //     let b=document.getElementById('logo');
  //     b.style.color="goldenrod";
  //     b.style.border="2px solid goldenrod"
  //   },2000)
  // },5000)
  const SignOut=async()=>{
    await(signOut(auth)).then((value)=>{
      alert("log out");
      setAuthu(false);
      navigate("/")
    })
  }
  return (
    <div className='main3'>
        <p id='logo' className='logo'>Shop Sphere</p>
        <div className='Nav'>
          <div className='navlinks'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/Shop">Shop</Link>
            <Link className='link' to="/Cart">Cart</Link>
            <Link className='link' to="">About</Link>
            <Link className='link' to=''>Contact</Link>
            {!authu?<Link className='link' to='/Login'>Login</Link>:<button onClick={()=>{SignOut()}}>Logout</button>}
            </div>
        </div>
    </div>
  )
}

export default Navbar
