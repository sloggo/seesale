import '../Styles/WelcomePage.css';
import React from 'react'

function WelcomePage() {
  return (
    <div className='welcome-page-container'>
        <Logo></Logo>
    </div>
  )
}

function Logo(){
    return(
        <h1 className='welcome-page-logo'>SeeSale</h1>
    )
}

function SubTitle(){
    return(
        <h3>See, Sell and Explore</h3>
    )
}

export default WelcomePage