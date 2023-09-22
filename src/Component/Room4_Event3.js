import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../Context';

function Room4_Event3() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);
  const navigate = useNavigate()


  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
    setTimeout(() => {
      navigate("/ghost")
    }, 2000);
   })
  

  return (
    <section className="rooms room4_event3">
      <figure><img src='./room_4_ghost_lights.png'></img></figure>
      <p>...</p>
      <div className='selects room4_event3_sel'>
        <Link to={`/ghost`}>
          <p></p>
          <figure><img src='../hand.png' /></figure>
        </Link>

      </div>
    </section>
  )
}

export default Room4_Event3