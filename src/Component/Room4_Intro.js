import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context';

function Room4_intro() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  return (
    <section className="rooms event room4">
      <p>당신은 거실을 지나 2층 계단으로 하염없이 뛴다.</p>
      <div className='selects room3_sel'>
        <Link to={`/room4`}>
          <p>눈앞에 있는 방으로 들어간다.</p>
          <figure><img src='../blackdoor.png' /></figure>
        </Link>
      </div>
    </section>
  )
}

export default Room4_intro