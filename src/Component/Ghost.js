import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../Context';


function Ghost() {
  const navigate = useNavigate();

  function getRandomNumber() {
    return Math.floor(Math.random() * 4) + 1;
}
  const randomNum = getRandomNumber();

  useEffect(()=>{
    getRandomNumber()
    setTimeout(() => {
      navigate("/")
    }, 1000);
  }, [])



  return (
      <section onClick={()=>{navigate("/")}} className='ghostPop'>
        <figure><img src={`./ghost_${randomNum}.png`}></img></figure>
        <p className='deadText' onClick={()=>{navigate("/")}}>당신은 죽었습니다.</p>
      </section>
)
}

export default Ghost