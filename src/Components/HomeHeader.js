import React, { useEffect } from 'react'
import '../Styles/HomeHeader.css'

function HomeHeader( {isMobile} ) {
  if(isMobile){ // Render Welcome text if it is on desktop
    return (<div className='home-header'>
        <Logo></Logo>
        <Icons></Icons>
    </div>)
  } else{
    return (<div className='home-header'>
        <Logo></Logo>
        <WelcomeText></WelcomeText>
        <Icons></Icons>
    </div>)
  }
}

function Logo(){
    return(
        <h1 className='header-logo'>SeeSale</h1>
    )
}

function ProfileIcon(){
    return(
        <div className='header-profile'>

        </div>
    )
}

function WelcomeText(){
    return(
        <h2 className='header-welcometext'>Welcome back, <span>USER</span></h2> // span to bold thte text
    )
}

function Icons(){
    return(
        <div className='header-icons'>
            <img src='./images/settings.svg'></img>
            <img src='./images/settings.svg'></img>
            <img src='./images/settings.svg'></img>
        </div>
    )
}

export default HomeHeader