import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context';

function Room3_Event2() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  return (
      <section className="rooms event room3">
        <p>1994 라고 적힌 쪽지를 발견했다.</p>
        <div className='selects room3_sel'>
          <Link to={`/room3`}>
            <p>...</p>
            <span class="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
  )
}

export default Room3_Event2