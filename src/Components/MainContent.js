import React from 'react'
import Reviews from './Review'
import '../Styles/MainContent.css'
import ForYou from './ForYou'

function MainContent({isMobile}) {
  return (
    <div className='main-content'>
        <Reviews></Reviews>
      
        {!isMobile && <ForYou></ForYou>}
    </div>
  )
}

export default MainContent