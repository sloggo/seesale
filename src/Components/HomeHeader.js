import React from 'react'

function HomeHeader() {
  return (
    <div>
        <Logo></Logo>
        <WelcomeText></WelcomeText>
        <Icons></Icons>
    </div>
  )
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
        <h2 className='header-welcometext'>Welcome back, <span>USER</span></h2>
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