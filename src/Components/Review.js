import React from 'react'
import '../Styles/Review.css';
import { ProfileIcon } from './HomeHeader'

function Reviews(){
    return(
        <div className='reviews-container'>
            <Review></Review>
            <Review></Review>
        </div>
    )
}

function Review() {
  return (
    <div className='review-container'>
        <TopBarTop></TopBarTop>
        <TopBarBottom></TopBarBottom>
        <Image></Image>
        <Rating></Rating>
        <ReviewContent></ReviewContent>
        <ViewComments></ViewComments>
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
        <img src='./images/placeholdercontent.png' className='review-image' alt='Review'></img>
    )
}

function Rating(){
    return(
        <div className='review-rating-container'>
            <div className='review-rating-user'>
                <ProfileIcon></ProfileIcon>
                <h4 className='review-rating-user-name'>User</h4>
            </div>

            <RatingStars></RatingStars>
        </div>
    )
}

function RatingStars(){
    return(
        <div className='review-rating-stars-container'>
            <img className='review-rating-star' src='./images/star.svg' alt='Star symbol'></img>
            <img className='review-rating-star' src='./images/star.svg' alt='Star symbol'></img>
            <img className='review-rating-star' src='./images/star.svg' alt='Star symbol'></img>
            <img className='review-rating-star' src='./images/star.svg' alt='Star symbol'></img>
            <img className='review-rating-star' src='./images/star.svg' alt='Star symbol'></img>
        </div>
    )
}

function ReviewContent(){
    return(
        <p className='review-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat luctus dui, faucibus pulvinar purus scelerisque vitae. Praesent nulla odio, egestas id dictum sed, mollis ut nisi. Curabitur tellus justo, sollicitudin id pretium at, blandit at ante. Morbi nec nisi magna. Nullam sit amet convallis quam. Pellentesque scelerisque tellus vel rutrum hendrerit. Aliquam non risus et purus tristique porttitor sit amet eleifend metus. Donec porttitor facilisis condimentum. In hac habitasse platea dictumst. Sed non dolor dictum, malesuada libero eget, consectetur mi. </p>
    )
}

function ViewComments(){
    return(
        <h2 className='review-view-comments'>View all 7 comments...</h2>
    )
}

export default Reviews
export {RatingStars}