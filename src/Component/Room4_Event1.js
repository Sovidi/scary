import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context';

function Room4_Event1() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  return (
    <section className="rooms room4_event1">
      <figure><img src='./room_4_lights.png'></img></figure>
      <p>...</p>
      <div className='selects room4_event1_sel'>
        <Link to={`/room4_event2`}>
          <p>다시 불을 끈다.</p>
          <figure><img src='./hand.png' /></figure>
        </Link>
      </div>
    </section>
  )
}

export default Room4_Event1