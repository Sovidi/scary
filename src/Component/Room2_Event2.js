import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../Context';

function Room2_Event2() {
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
      <section className="rooms room2_event2">
        <figure><img src='../room_2_ghost2.png'/></figure>
        <p>정신을 잃고 쓰러진다..</p>
        <div className='selects room2_event2_sel'>
          <Link to={`/room3_intro`}>
            <p>...</p>
            <span class="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
  )
}

export default Room2_Event2