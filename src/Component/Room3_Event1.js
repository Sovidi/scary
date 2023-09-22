import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context';

function Room3_Event1() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  return (
      <section className="rooms room3">
        <figure><img src='./room_3_ghost.png'></img></figure>
        <p>순간 몸이 바위와 같이 굳는다</p>
        <div className='selects room3_sel'>
          <Link to={`/room3_event3`}>
            <p>샤워 커튼으로 다시 가린다..</p>
            <figure><img src='./hand.png' /></figure>
          </Link>
        </div>
      </section>
  )
}

export default Room3_Event1