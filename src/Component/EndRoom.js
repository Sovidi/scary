import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../Context';

function EndRoom() {
    const {data, fetchFn} = useContext(myContext);
    const navigate = useNavigate();
    const elForm = useRef();

    const insert = (e) => {
      e.preventDefault()      
      let formData = new FormData(e.target);
      let today = new Date();
      let date = `${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`
      formData.append("date", date);
      let objData = Object.fromEntries(formData);
      fetchFn("comment", objData);
      e.target.name.value = "";
      e.target.message.value = "";
    }

    useEffect(()=>{
      fetchFn("commentGet", "");
    }, [])
    
    if(!data) console.log(data)
    
  return (
    <section className='comment'>
      <p>추카추카 탈출하셨습니다.</p>
      <p>방명록을 남겨주세요</p>
      <form onSubmit={(e)=>{insert(e)}} className='text' ref={elForm}>
          <input required type='text' placeholder='이름' name='name'/>
          <textarea required placeholder='댓글' name='message'></textarea>
          <button>등록하기</button>
      </form>
      <ul className='commentList'>
        {
          data.map(item=>(
            <li className='commentBox'>
              <div>
                <p>{item.name}</p>
                <p>{item.date}</p>
              </div>
              <p>{item.message}</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default EndRoom