import React, { useContext, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../Context';

function Room5() {
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
      <figure><img src='./room_5.png'></img></figure>
      <p>알 수 없는 금고가 놓여 있다.</p>
      <div className='selects room5_sel'>
        <form onSubmit={(e)=>{ending(e)}}>
          <p>숫자를 적는다</p>
          <input name='password'/>
          <figure><img src='./hand.png' /></figure>
        </form>
      </div>
    </section>
  )
}

export default Room5