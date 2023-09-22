import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context';

function Room1_Event2() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  return (
      <div className='rooms event room1_event1'>
        <p>무언가 당신에게 다가오고 있습니다!</p>
        <div className='selects room1_event1_sel'>
          <Link to={`/ghost`}>
            <figure><img src='./closet.png'></img></figure>
            <p>옷장 안에 숨는다!</p>
          </Link>
          <Link to={`/room1_event3`}>
            <figure><img src='./bed.png'></img></figure>
            <p>침대 아래로 숨는다!</p>
          </Link>
        </div>
      </div>
  )
}

export default Room1_Event2