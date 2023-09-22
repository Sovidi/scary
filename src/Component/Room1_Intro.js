import React, { useContext, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import { myContext } from '../Context'

function Room1_Intro() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  const elInput = useRef();



  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
  })


  return (
      <section className="rooms room1_intro">
        <figure><img src='./room_1.png'></img></figure>
        <p>집으로 들어온 당신은 끔찍한 소름을 느낍니다.. 그곳은 말그대로 폐가처럼 보입니다.</p>
        <div className='selects room1_intro_sel'>
          <Link to={`/room1`}>
            <p>기분이 이상하다..</p>
            <span class="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
  )
}

export default Room1_Intro