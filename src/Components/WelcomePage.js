import '../Styles/WelcomePage.css';
import React from 'react'
import { motion } from "framer-motion";

function WelcomePage() {
  return (
    <div className='welcome-page-container'>
        <Logo></Logo>
        <SubTitle></SubTitle>
    </div>
  )
}

function Logo(){
    return(
        <div className='welcome-page-logo-container'>
            <motion.h1 className='welcome-page-logo' initial={{x:-200}} animate={{x:0}} transition={{duration:.3}}>SeeSale</motion.h1>
        </div>
    )
}

function SubTitle(){
    return(
        <h3 className='welcome-page-subtitle'>See, Sell and Explore</h3>
    )
}

export default WelcomePage