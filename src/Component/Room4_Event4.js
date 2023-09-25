import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context';

function Room4_Event4() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  return (
    <section className="rooms room4_event4">
      <figure><img src='./room_4_ghost.png'></img></figure>
      <p>...</p>
      <div className='selects room4_event4_sel'>
        <Link to={`/room5`}>
          <p>옆방으로 조용히 들어간다.</p>
          <figure><img src='./hand.png' /></figure>
        </Link>
        <Link to={`/ghost`}>
          <p>아래층으로 조심히 내려간다..</p>
          <figure><img src='./hand.png' /></figure>
        </Link>

      </div>
    </section>
  )
}

export default Room4_Event4