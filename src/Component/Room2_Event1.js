import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../Context';

function Room2_Event1() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
   })
  

  const navigate = useNavigate();

  // useEffect(() => {
  //   // 뒤로가기 이벤트 리스너를 추가
  //   window.addEventListener("popstate", navigate("/space"));

  //   // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
  //   return () => {
  //     window.removeEventListener("popstate", navigate("/space"));
  //   };
  // }, []);


  return (
      <section className="rooms room2_event1">
        <figure><img src='./room_2_ghost.png'></img></figure>
        <p>갑자기 나타난 아이 형상의 귀신에 심장이 뛰기 시작한다!..</p>
        <div className='selects room2_event1_sel'>
          <Link to={`/room2_event2`}>
            <p>곰인형을 돌려준다</p>
            <figure><img src='./hand.png' /></figure>
          </Link>
          <Link to={`/ghost`}>
            <p>말을 건다</p>
            <figure><img src='./hand.png' /></figure>
          </Link>
        </div>
      </section>
  )
}

export default Room2_Event1