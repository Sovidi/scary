import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context';

function Room4() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  return (
    <section className="rooms room4">
      <figure><img src='./room_4.png'></img></figure>
      <p>어두워서 아무것도 보이질 않는다</p>
      <div className='selects room3_sel'>
        <Link to={`/room4_event1`}>
          <p>불을 켠다</p>
          <figure><img src='./hand.png' /></figure>
        </Link>
      </div>
    </section>
  )
}

export default Room4