import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context';

function Room3() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  return (
      <section className="rooms room3">
        <figure><img src='./room_3.png'></img></figure>
        <p>정신을 차려보니 욕실에 혼자 서있다</p>
        <div className='selects room3_sel'>
          <Link to={`/room3_event1`}>
            <p>샤워 커튼을 젖힌다</p>
            <figure><img src='./hand.png' /></figure>
          </Link>
          <Link to={`/room3_event2`}>
            <p>선반을 뒤진다</p>
            <figure><img src='./teddy.png' /></figure>
          </Link>
          <Link to={`/ghost`}>
            <p>뒤돌아 나간다</p>
            <figure><img src='./blackdoor.png' /></figure>
          </Link>
        </div>
      </section>
  )
}

export default Room3