import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context';

function Room1_Event3() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  return (
      <div className='rooms event room1_event2'>
        <p>다시 조용해진 것 같다..</p>
        <div className='selects room1_event2_sel'>
          <Link to={`/room2`}>
            <p>...</p>
            <span class="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
  )
}

export default Room1_Event3