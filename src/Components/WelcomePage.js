import '../Styles/WelcomePage.css';
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";

function WelcomePage(props) {
  return (
    <div className='welcome-page-container'>
        <Header isMobile={props.isMobile}></Header>
        {props.isMobile && <AccountButtons></AccountButtons>}

        <div className='welcome-content-container'> {/* to allow mobile flex container changes*/}
            <Text isMobile={props.isMobile}></Text>
            <motion.img src='./images/welcomeicons.svg' className='welcome-page-icons' initial={{rotate:-5}} animate={{rotate: 5}} transition={{duration:5, repeat: Infinity, repeatType:'reverse'}}></motion.img>
        </div>

        <About></About>
    </div>
  )
}

function Header(props){
    return(
        <header className='welcome-header'>
            <Logo></Logo>
            <Nav></Nav>
            {!props.isMobile && <AccountButtons></AccountButtons>}
        </header>
    )
}

function Logo(){
    return(
        <div className='welcome-page-logo-container'>
            <motion.h1 className='welcome-page-logo' initial={{x:-200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.7, type:'spring'}}>SeeSale</motion.h1>
            <motion.h2 className='welcome-page-logo-subtext' initial={{y:200, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:.7, delay:0.3, type:'spring'}}>See, sell, explore</motion.h2>
        </div>
    )
}

function Nav(){
    return(
        <ul className='nav-container'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>About</li>
        </ul>
    )
}

function AccountButtons(){
    return(
        <div className='welcome-accountbuttons'>
            <LogIn></LogIn>

            <SignUp></SignUp>
        </div>
    )
}

function LogIn(){
    return(
        <h3 className='welcome-login'>Log In</h3>
    )
}

function SignUp(){
    return(
        <h3 className='welcome-signup'>Sign Up</h3>
    )
}

function Text(props){
    return(
        <div className='welcome-text'>
            <div className='text-container'> {/* to allow overflow to be hidden to give the pop up behind a wall effect */}
                <motion.h1 initial={{y:100}} animate={{y:0}} transition={{duration:1, delay:1, type:'spring'}}><span>Social Media</span></motion.h1>
            </div>

            <div className='text-container'>
                <motion.h1 initial={{y:100}} animate={{y:0}} transition={{duration:1, delay:1.3, type:'spring'}}><span>Eccommerce</span>,</motion.h1>
            </div>

            <div className='text-container'>
                <motion.h1 initial={{y:100}} animate={{y:0}} transition={{duration:1, delay:1.6, type:'spring'}}>Made easy.</motion.h1>
            </div>

            { !props.isMobile && <div className='last-text-container'>
                <motion.h1 initial={{y:100}} animate={{y:0}} transition={{duration:1, delay:3, type:'spring'}}>Start <span>today</span>!</motion.h1>
            </div>}
        </div>
    )
}

function About(){
    return(
        <div className='welcome-about-container'>
            
            <div className='about-box'>
                <h1 className='about-box-title'>What is SeeSale?</h1>
                <p className='about-box-text'>An easy to use, eccommerce social media made for sharing, liking and discovering new products</p>
            </div>
            
            <div className='about-box'>
                <h1 className='about-box-title title2'>Who made it?</h1>
                <p className='about-box-text'>SeeSale was made by a 17 year old web developer named Josh for a portfolio project for his application to a college course.</p>
            </div>

        </div>
    )
}

export default WelcomePage
export {Logo}