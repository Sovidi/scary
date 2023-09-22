import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context';

function Room3_Event3() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  return (
      <section className="rooms room3">
        <figure><img src='./Room_3_ghost2.png'></img></figure>
        <p>그녀와 눈이 마주쳤다..</p>
        <div className='selects room3_sel'>
          <Link to={`/room4_intro`}>
            <p>문을 열고 도망친다</p>
            <figure><img src='../hand.png' /></figure>
          </Link>
          <Link to={`/space`}>
            <p>창문으로 도망친다</p>
            <figure><img src='../window.png' /></figure>
          </Link>
        </div>
      </section>
  )
}

export default Room3_Event3