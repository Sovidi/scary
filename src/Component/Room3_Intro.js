import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context';

function Room3_Intro() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  return (
      <section className="rooms room3">
        <figure><img src='./eyeball.gif'></img></figure>
        <div className='selects room3_sel'>
          <Link to={`/room3`}>
            <p>...</p>
            <span class="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
  )
}

export default Room3_Intro