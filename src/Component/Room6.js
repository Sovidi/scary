import React, { useContext, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../Context';

function Room6() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);
  const navigate = useNavigate();

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
  })

  const ending = (e) => {
    e.preventDefault();
    if (e.target.password.value == 1994) {
      navigate("/room5_event1");
    } else {
      navigate("/ghost");
    }
  }


  return (
    <section className="rooms room4">
      <figure><img src='./darkforest.png'></img></figure>
      <p>누가봐도 당신은 길을 잘못 들었습니다.</p>
      <div className='selects room5_sel'>
        <Link to="/escape">
          <p>하염없이 걷는다...</p>
          <figure><img src='./hand.png' /></figure>
        </Link>
      </div>
    </section>
  )
}

export default Room6