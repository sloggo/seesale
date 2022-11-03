import '../Styles/WelcomePage.css';
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";

function WelcomePage() {
  return (
    <div className='welcome-page-container'>
        <Header></Header>
        <AccountButtons></AccountButtons>
    </div>
  )
}

function Header(){
    return(
        <header className='welcome-header'>
            <Logo></Logo>
            <Nav></Nav>
        </header>
    )
}

function Logo(){
    return(
        <div className='welcome-page-logo-container'>
            <motion.h1 className='welcome-page-logo' initial={{x:-200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1}}>SeeSale</motion.h1>
            <h2 className='welcome-page-logo-subtext'>See, sell, explore</h2>
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
          setSpindleCount( (prev) => prev+1 ) // use spindlecount variable as function doesn't call properly in the set interval function
        }, spindleTime);
      
        return () => clearInterval(interval);
      }, []);

    useEffect(() => { // spins the spindle everytime the interval runs by using useeffect on the spindlecount variable
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

export default WelcomePage