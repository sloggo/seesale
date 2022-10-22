import React from 'react'
import '../Styles/Review.css';
import { ProfileIcon } from './HomeHeader'

function Review() {
  return (
    <div className='review-container'>
        <TopBarTop></TopBarTop>
        <TopBarBottom></TopBarBottom>
        <Image></Image>
    </div>
  )
}

function TopBarTop(){
    return(
        <div className='review-topbartop-container'>
            <ProfileIcon></ProfileIcon>
            <h2 className='review-topbar-text'><span className='review-topbar-text-bold'>User</span> posted a review;</h2>
        </div>
    )
}

function TopBarBottom(){
    return(
        <h3 className='review-topbar-text review-topbarbottom'> <span className='review-topbar-text-bold'>Product</span> by <span className='review-topbar-text-bold'>Business</span></h3>
    )
}

function Image(){
    return(
        <img src='./images/placeholdercontent.png' className='review-image'></img>
    )
}

export default Review