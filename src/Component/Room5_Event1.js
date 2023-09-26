import React, { useContext, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../Context';

function Room5_Event1() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);
  const navigate = useNavigate();

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
  })

  return (
    <section className="rooms room4">
      <figure><img src='./room_5_opened.gif'></img></figure>
      <p>위험하다</p>
      <div className='selects room5_sel'>
        <Link to="/ghost">
          <p>창문으로 도망간다</p>
          <figure><img src='./hand.png' /></figure>
        </Link>
        <Link to="/escape">
          <p>에라모르겠다</p>
          <figure><img src='./hand.png' /></figure>
        </Link>
      </div>
    </section>
  )
}

export default Room5_Event1