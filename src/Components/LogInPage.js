import React from 'react'
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { Logo } from './WelcomePage';
import "../Styles/WelcomePage.css"
import "../Styles/LogInPage.css"

function LogInPage(props) {
  return (
    <div className='login-page-container'>
        <Header></Header>

        <div className='login-page-content-container'>
            {!props.isMobile && <LockAndKey></LockAndKey>}
            <LogIn></LogIn>
        </div>

        <Products></Products>
    </div>
  )
}

function Header(){
    return(
        <div className='login-header'>
            <Logo></Logo>
        </div>
    )
}

function Products(){
    const spindleTime = 3000;
    const [spindleCount, setSpindleCount] = useState(0)

    const [items, setItems] = useState([{ // make item array state to keep track of ids and sources to render them easily and for react to update them accordingly
        id: 'shoe',
        src: './images/shoe.png',
        layout: true
    },
    {
        id: 'watch',
        src: "./images/watch.png",
        layout: true
    },
    {
        id: 'makeup',
        src: './images/makeup.png',
        layout: true
    },
    {
        id: 'painting',
        src: './images/painting.png',
        layout: true
    },
    {
        id: 'brush',
        src: './images/brush.png',
        layout: true
    },])

    function spinSpindle(){ // shuffles the item array to move the spindle items around
        let newItems = [...items] // creates copy of items to not overwrite state

        const itmToMove = {...newItems[0]}; // gets specfic item at the start of the array
        const nextToMove = {...newItems[1]};

        newItems.splice(0, 1)
        itmToMove.layout = true; // to allow the framer-motion animation to play
        newItems.push(itmToMove) // moves first item to the end of the array

        nextToMove.layout = false; // to stop the framer-motion animation from animating spot [0] to [-1] with the next item
        newItems.splice(0, 1, nextToMove) // replaces new item with the old item

        setItems(newItems) // updates state and allows react to re-render
        console.log(newItems)
    }

    useEffect(() => { // spins the spindle every interval / adjustable from the variable interval
        const interval = setInterval(() => {
          setSpindleCount( (prev) => prev+1 ) // use spindlecount variable as function doesn't call properly in useEffect interval function
        }, spindleTime);
      
        return () => clearInterval(interval);
      }, []); // [] to ensure it only runs once

    useEffect(() => { // spins the spindle everytime the interval runs by using useEffect on the spindlecount variable
        spinSpindle()
    }, [spindleCount]);

    return(
        <motion.div className='welcome-page-product-container'>
            {items.map((item, itemIndex) => {
                if(itemIndex === 2){ // if the item is the centre item / currently focused item
                    return <motion.img layout={item.layout} key={item.id} src={item.src} className='welcome-page-product current-product'></motion.img> // add special current product class to highlight it
                } else{
                    return <motion.img layout={item.layout} transition={{layout: {duration:0.2}}} key={item.id} src={item.src} className='welcome-page-product'></motion.img>
                }
            })}
        </motion.div>
    )
}

function LogIn(){
    return(
        <div className='login-container'>
            <h1 className='login-title'>Log In</h1>

            <LogInForm></LogInForm>
        </div>
    )
}

function LogInForm(){
    return(
        <form className='login-form'>
            <div className='input'>
                <label for="username">Username</label>
                <input type='text' id='username' name='username'></input>
            </div>

            <div className='input'>
                <label for="username">Password</label>
                <input type='password' id='password' name='password'></input>
            </div>
            <p className='forgot-password'>Forgot your password? No worries.</p>

            <button className='login-submit'>Log In</button>
        </form>
    )
}

function LockAndKey(){
    return(
        <div className='lock-and-key'>
            <img src='./images/key.svg' className='login-key' alt='login key'></img>
            <motion.img src='./images/lock.svg' className='login-lock' alt='login lock' initial={{rotate:-5}} animate={{rotate: 3}} transition={{duration:.5, repeat: Infinity, repeatType:'reverse'}}></motion.img>
        </div>
    )
}

export default LogInPage