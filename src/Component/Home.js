import React, { useContext, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import { myContext } from '../Context'

function Home() {
  const {randomNum1, randomNum2, randomNum3, getRandomNumber1, getRandomNumber2, getRandomNumber3} = useContext(myContext);

  const elInput = useRef();



  useEffect(()=>{
    getRandomNumber1();
    getRandomNumber2();
    getRandomNumber3();
  })


  return (
      <Link to="/room1_intro" className='intro'>
        <figure><img src='./House.png'></img></figure>
      </Link>
  )
}

export default Home