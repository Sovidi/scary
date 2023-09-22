import React, { useContext, useEffect } from 'react'
import { myContext } from '../Context'
import { useNavigate } from 'react-router-dom';

function Space() {
  const {data, fetchFn} = useContext(myContext);
  
  useEffect(()=>{
    fetchFn("space", "");
  }, [])

  // if(!data) return <>로딩중</>
  return (
    <section className='rooms event spaceSec'>
      <p>당신은 우주 공간으로 떨어졌습니다.</p>
      <a href='/'>돌아가기</a>
      <figure><img src={data.url} alt="" /></figure>
    </section>
  )
}

export default Space