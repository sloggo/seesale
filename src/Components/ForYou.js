import React from 'react'
import '../Styles/ForYou.css'
import { ProfileIcon } from './HomeHeader'
import { RatingStars } from './Review'

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
            <div className='for-you-bus-title'>
                <ProfileIcon></ProfileIcon>
                <h2>Business</h2>
            </div>

            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
        </div>
    )
}

function ProductContainer(){
    return(
        <div className='for-you-product-container'>
            <img src='./images/placeholdercontent.png' className='for-you-product-image'></img>

            <div className='for-you-product-text-container'>
                <h4 className='for-you-product-text-title'>Product</h4>
                <p className='for-you-product-text'>Product description</p>
            </div>

            <RatingStars></RatingStars>
        </div>
    )
}
export default ForYou