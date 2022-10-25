import React from 'react'
import '../Styles/ForYou.css'
import { ProfileIcon } from './HomeHeader'

function ForYou() {
  return (
    <div className='for-you-container'>
        <Header></Header>
        <Content></Content>
    </div>
  )
}

function Header(){
    return(
        <h1 className='for-you-header'>For You</h1>
    )
}

function Content(){
    return(
        <div className='for-you-content'>
            <BusinessContainer></BusinessContainer>
        </div>
    )
}

function BusinessContainer(){
    return(
        <div className='for-you-bus-container'>
            <ProfileIcon></ProfileIcon>
            <h2>Business</h2>
        </div>
    )
}
export default ForYou