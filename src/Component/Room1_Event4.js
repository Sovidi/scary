import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context';

function Room1_Event4() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  return (
      <div className='rooms room1_event4'>
        <figure><img src='./photo.png'/></figure>
        <p className='letter'>위험하다</p>
        <div className='selects room1_event4_sel'>
          <Link to={`/room1_event2`}>
            <p>바로 옆방으로 도망간다!</p>
            <figure><img src='./blackdoor.png'/></figure>
          </Link>
          <Link to={`/ghost`}>
            <p>욕실로 도망간다!</p>
            <figure><img src='./blackdoor.png'/></figure>
          </Link>

        </div>
      </div>
  )
}

export default Room1_Event4