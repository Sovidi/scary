import React, { useContext, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../Context';

function Escape() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);
  const navigate = useNavigate();

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
  })

  return (
    <section className="rooms escape">
      <figure><img src='./escape.png'></img></figure>
      <p>...</p>
      <div className='selects escape'>
        <Link to="/endroom">
          <p>눈앞에 빛이 보입니다.. 당신은 탈출하였습니다.</p>
          <figure><img src='./hand.png' /></figure>
        </Link>
      </div>
    </section>
  )
}

export default Escape