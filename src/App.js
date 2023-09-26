import './App.scss';
import {HashRouter, BrowserRouter, Link, Routes, Route, useNavigate} from "react-router-dom"
import { useEffect } from 'react';
import Context from './Context';

import useSound from 'use-sound';
import soundFile from "../src/media/background.mp3";

import Home from './Component/Home';
import Room1_Intro from './Component/Room1_Intro';
import Room1 from './Component/Room1';
import Room1_Event1 from './Component/Room1_Event1';
import Room1_Event2 from './Component/Room1_Event2';
import Room1_Event3 from './Component/Room1_Event3';
import Room1_Event4 from './Component/Room1_Event4';
import Room2 from './Component/Room2';
import Room2_Event1 from './Component/Room2_Event1';
import Room2_Event2 from './Component/Room2_Event2';
import Room3 from './Component/Room3';
import Room3_Event1 from './Component/Room3_Event1';
import Room3_Event2 from './Component/Room3_Event2';
import Room3_Event3 from './Component/Room3_Event3';
import Room4_intro from './Component/Room4_Intro';
import Room4 from './Component/Room4';
import EndRoom from './Component/EndRoom';
import Ghost from './Component/Ghost';
import Space from './Component/Space';
import Room3_Intro from './Component/Room3_Intro';
import Room5 from './Component/Room5';
import Icon from './Component/Icon';
import Room4_Event1 from './Component/Room4_Event1';
import Room4_Event2 from './Component/Room4_Event2';
import Room4_Event3 from './Component/Room4_Event3';
import Room4_Event4 from './Component/Room4_Event4';
import Room5_Event1 from './Component/Room5_Event1';
import Escape from './Component/Escape';

function App() {  
  const [play, { stop }] = useSound(soundFile, { loop: true, autoplay: true });

  useEffect(()=>{
    play();
  }, []);

  return (
    <Context>
      <main>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/space" element={<Space/>}></Route>
            
            <Route path="/room1_intro" element={<Room1_Intro/>}></Route>
            <Route path="/room1" element={<Room1/>}></Route>
            <Route path="/room1_event1" element={<Room1_Event1/>}></Route>
            <Route path="/room1_event2" element={<Room1_Event2/>}></Route>
            <Route path="/room1_event3" element={<Room1_Event3/>}></Route>
            <Route path="/room1_event4" element={<Room1_Event4/>}></Route>

            <Route path="/room2" element={<Room2/>}></Route>
            <Route path="/room2_event1" element={<Room2_Event1/>}></Route>
            <Route path="/room2_event2" element={<Room2_Event2/>}></Route>

            <Route path="/room3_intro" element={<Room3_Intro/>}></Route>
            <Route path="/room3" element={<Room3/>}></Route>
            <Route path="/room3_event1" element={<Room3_Event1/>}></Route>
            <Route path="/room3_event2" element={<Room3_Event2/>}></Route>
            <Route path="/room3_event3" element={<Room3_Event3/>}></Route>

            <Route path="/room4_intro" element={<Room4_intro/>}></Route>
            <Route path="/room4" element={<Room4/>}></Route>
            <Route path="/room4_event1" element={<Room4_Event1/>}></Route>
            <Route path="/room4_event2" element={<Room4_Event2/>}></Route>
            <Route path="/room4_event3" element={<Room4_Event3/>}></Route>
            <Route path="/room4_event4" element={<Room4_Event4/>}></Route>

            <Route path="/room5" element={<Room5/>}></Route>
            <Route path="/room5_event1" element={<Room5_Event1/>}></Route>

            <Route path="/escape" element={<Escape/>}></Route>
            <Route path="/endroom" element={<EndRoom/>}></Route>

            <Route path='/ghost' element={<Ghost/>}></Route>
          </Routes>
        </HashRouter>
      </main>
      <Icon></Icon>
    </Context>
  );
}

export default App;
