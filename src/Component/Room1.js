import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../Context';

function Room1() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  // useEffect(() => {
  //   // 뒤로가기 이벤트 리스너를 추가
  //   window.addEventListener("popstate", navigate("/space"));

  //   // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
  //   return () => {
  //     window.removeEventListener("popstate", navigate("/space"));
  //   };
  // }, []);


  return (
      <section className="rooms room1">
        <figure><img src='./room_1.png'></img></figure>
        <p>갑자기 몸에 강하게 소름이 끼치기 시작합니다.</p>
        <div className='selects room1_sel'>
          <Link to={`/room1_event4`}>
            <p>액자를 살펴본다</p>
            <figure><img src='./hand.png' /></figure>
          </Link>
          <Link to={`/room1_event1`}>
            <p>편지를 읽는다</p>
            <figure><img src='./letter.png' /></figure>
          </Link>
        </div>
      </section>
  )
}

export default Room1