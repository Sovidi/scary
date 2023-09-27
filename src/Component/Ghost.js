import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../Context';
import useSound from 'use-sound';
import soundFile from "../media/scream.mp3";


function Ghost() {
  const navigate = useNavigate();
  const [play, { stop }] = useSound(soundFile, { loop: true, autoplay: true });

  function getRandomNumber() {
    return Math.floor(Math.random() * 7) + 1;
  }
  const randomNum = getRandomNumber();

  useEffect(()=>{
    getRandomNumber();
    const timer = setTimeout(() => {
      navigate("/")
    }, 2000);
    return () => {
      clearTimeout(timer);
    }
  }, []);

  useEffect(()=>{
    play();
    return () => {
      stop();
    };
  }, [play, stop]);

  return (
      <section onClick={()=>{navigate("/")}} className='ghostPop'>
        <figure><img src={`./ghost_${randomNum}.png`}></img></figure>
        <p className='deadText' onClick={()=>{navigate("/")}}></p>
      </section>
)
}

export default Ghost