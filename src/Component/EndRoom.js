import React, { useContext, useEffect, useRef, useState } from 'react'
import { myContext } from '../Context';

function EndRoom() {
  const { data, fetchFn, dispatch } = useContext(myContext);
  const elForm = useRef();
  const mdForm = useRef();
  const [mode, setMode] = useState("write");
  const [modObj, setModObj] = useState([{name: "", message: ""}]);
  const [chkObj, setChkObj] = useState(false);
  const modName = useRef("");
  const modMessage = useRef("");
  const modPW = useRef("");

  const insert = async (e) => {
    e.preventDefault()
    let formData = new FormData(e.target);
    let today = new Date();
    let date = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`
    formData.append("date", date);
    formData.append("key", Date.now());
    let objData = Object.fromEntries(formData);
    await fetchFn("comment", objData);
    e.target.name.value = "";
    e.target.message.value = "";
  };

  const modify = async () => {
    await fetchFn("update", modObj[0]);
    modPW.current.value = "";
    setMode("write");
  };

  const commentDelete = async () => {
    await fetchFn("delete", modObj[0]);
    modPW.current.value = "";
    setMode("write");
  };

  const modPrepare = async (e, item) => {
    e.preventDefault();
    const modData = data.filter(obj => obj.key == item.key);
    setModObj(modData);
    setChkObj(item);
    modPW.current.value = "";
    setMode("modify");
  };



  useEffect(()=>{
    // modName.current.value = modObj[0].name;
    // modMessage.current.value = modObj[0].message;
    // modPW.current.value = "";
    console.log(modObj);
  }, [modObj]);

  // useEffect(()=>{
    // setChkObj(data.filter(item=>{
    //   return modObj.some(obj => obj.name == item.name && obj.password == item.password && obj.message == item.message)
    // }))
  //   if(chkObj) {
  //     alert("수정 오류 발생");
  //   };
  // }, [data]);

  useEffect(() => {
    fetchFn();
  }, []);

  if (!data) return <>로딩중</>;

  return (
    <section className='comment'>
      <p>추카추카 탈출하셨습니다.</p>
      <p>방명록을 남겨주세요</p>
      <form onSubmit={(e) => { insert(e) }} className={`text ${mode == "write" ? "active" : ""}`} ref={elForm}>
        <input required type='text' placeholder='이름' name='name' />
        <input required type='password' placeholder='비밀번호' name='password' />
        <textarea required placeholder='댓글' name='message'></textarea>
        <button>등록하기</button>
      </form>
      <form onSubmit={(e) => { modify(e) }} className={`text ${mode == "modify" ? "active" : ""}`} ref={mdForm}>
        <input required type='text' placeholder='이름' name='name' value={modObj[0].name} onChange={(e) => { setModObj(modObj.map(item => { item.name = e.target.value; return item; })) }} />
        <input ref={modPW} required type='password' placeholder='비밀번호' name='password' onChange={(e)=>{ setModObj(modObj.map(item => {item.password = e.target.value; return item;}))}} />
        <textarea required placeholder='수정할 내용' name='message' value={modObj[0].message} onChange={(e) => { setModObj(modObj.map(item => { item.message = e.target.value; return item; })) }}></textarea>
        <button type='button' onClick={()=>{ modify(); }}>수정하기</button>
        <button type='button' onClick={()=>{ commentDelete(); }}>삭제하기</button>
        <button type='button' onClick={async () => { setMode("write"); fetchFn(); }}>취소하기</button>
      </form>
      {/* <form onSubmit={(e) => { modify(e) }} className={`text ${mode == "modify" ? "active" : ""}`} ref={mdForm}>
        <input ref={modName} required type='text' placeholder='이름' name='name'/>
        <input ref={modPW} required type='password' placeholder='비밀번호' name='password' />
        <textarea ref={modMessage} required placeholder='수정할 내용' name='message' />
        <button>수정하기</button>
        <button type='button' onClick={}>삭제하기</button>
        <button type='button' onClick={() => { setMode("write"); }}>취소하기</button>
      </form> */}
      <div className={`commentBox ${mode == "write" ? "" : "active"}`}>
        <p>방명록 확인</p>
        <ul className='commentList'>
          {
            data.map(item => (
              <li className='comments'>
                <div>
                  <p>{item.name}</p>
                  <p>{item.date}</p>
                </div>
                <p>{item.message}</p>
                <button type="button" onClick={(e) => { modPrepare(e, item) }}>삭제/수정하기</button>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default EndRoom