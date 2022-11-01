import '../Styles/WelcomePage.css';
import React from 'react'
import { motion } from "framer-motion";

function WelcomePage() {
  return (
    <div className='welcome-page-container'>
        <Logo></Logo>
        <SubTitle></SubTitle>
        <SubTitle2></SubTitle2>
        <Product></Product>
    </div>
  )
}

function Logo(){
    return(
        <div className='welcome-page-logo-container'>
            <motion.h1 className='welcome-page-logo' initial={{x:-200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.3}}>SeeSale</motion.h1>
        </div>
    )
}

function SubTitle(){
    return(
        <motion.h3 className='welcome-page-subtitle' initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:.4, delay: 0.5}}>See, Sell and Explore,</motion.h3>
    )
}

function SubTitle2(){
    return(
        <motion.h3 className='welcome-page-subtitle2' initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:.4, delay: 0.9}}>Social Media ecommerce made easy</motion.h3>
    )
}

function Product(){
    return(
        <div className='welcome-page-product-container'>
            <img className='welcome-page-product' src='./images/shoe.png'></img>
        </div>
    )
}

export default WelcomePage