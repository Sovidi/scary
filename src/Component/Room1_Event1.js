import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context';

function Room1_Event1() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  return (
      <div className='rooms event room1_event1'>
        <p className='letter'>도망쳐</p>
        <div className='selects room1_event1_sel'>
          <Link to={`/ghost`}>
            <figure><img src='./bed.png'></img></figure>
            <p>바로 옆방으로 들어간다!</p>
          </Link>
          <Link to={`/ghost`}>
            <figure><img src='./closet.png'></img></figure>
            <p>밖으로 다시 나간다!</p>
          </Link>
        </div>
      </div>
  )
}

export default Room1_Event1