import React from 'react'
import Review from './Review'
import '../Styles/MainContent.css'
import ForYou from './ForYou'

function MainContent({isMobile}) {
  return (
    <div className='main-content'>
        <Review></Review>
        {!isMobile && <ForYou></ForYou>}
    </div>
  )
}

export default MainContent