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
      <section className="rooms room2">
        <figure><img src='./room_2.png'></img></figure>
        <p>아기 방이었던 것 같다.. 피가 왜 묻어있는 거지?</p>
        <div className='selects room2_sel'>
          <Link to={`/ghost`}>
            <p>옷장을 열어본다</p>
            <figure><img src='./hand.png' /></figure>
          </Link>
          <Link to={`/room2_event1`}>
            <p>곰인형을 가져간다</p>
            <figure><img src='./teddy.png' /></figure>
          </Link>
          <Link to={`/ghost`}>
            <p>다시 나간다</p>
            <figure><img src='./blackDoor.png' /></figure>
          </Link>
        </div>
      </section>
  )
}

export default Room1