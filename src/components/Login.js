import React from 'react'
import "./Login.css"
import {auth,googleProvider} from "./firebaseconfig"
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from 'react-router-dom'
import {useCart} from "../context/CartContext"
const Login = () => {
    const navigate=useNavigate();
    const {authu,setAuthu}=useCart();
    const signIn=async()=>{
        await signInWithPopup(auth,googleProvider).then((value)=>{
            setAuthu(true);
            navigate("/Shop");
        });
    }
  return (
    <center>
        <div className='login'>
            <h2>Sign In with Google</h2>
            <button onClick={()=>{signIn()}}>Sign In With Google</button>
        </div>
    </center>
  )
}

export default Login
