import React, { useEffect } from 'react'
import '../Styles/HomeHeader.css'

function HomeHeader( {isMobile} ) {
  if(isMobile){ // Render Welcome text if it is on desktop
    return (<div className='home-header'>
        <Logo></Logo>
        <ProfileIcon></ProfileIcon>
        <Icons></Icons>
    </div>)
  } else{
    return (<div className='home-header'>
        <Logo></Logo>
        <ProfileIcon></ProfileIcon>
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
            <img src='./images/placeholderuser.svg' className='header-profile-icon' alt='User icon'></img>
        </div>
    )
}

function WelcomeText(){
    return(
        <h2 className='header-welcometext'>Welcome back, <span className='header-welcometext-bold'>USER</span></h2> // span to bold thte text
    )
}

function Icons(){
    return(
        <div className='header-icons'>
            <img src='./images/settings.svg' alt='Settings icon'></img>
            <img src='./images/settings.svg' alt='Settings icon'></img>
            <img src='./images/settings.svg' alt='Settings icon'></img>
        </div>
    )
}

export default HomeHeader