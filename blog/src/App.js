/*eslint-disable*/


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학', '여자코트 추천']);
  let [따봉, 따봉변경] = useState([0, 0, 0, 0])
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(2)
  let[입력값, 입력값변경] = useState('');




  return (
    <div className='App'>
      <div className='blakc-nav'>
        <h4>ReactBlog</h4>
      </div>
      <button onClick={()=>{
        let arr_copy =[...글제목].sort();
        글제목변경(arr_copy);
      }
      }>가나다순 정렬</button>
    
    {/* array/object를 다룰 때는 원분을 보존하는 것이 좋다. */}

      <button onClick={() => {
        // ...은 괄호를 벗겨달라는 말.
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      {/* <div className='list'>
      <h4>{글제목[0]} <span onClick={() => {따봉변경(따봉+1)}}>👍</span>{따봉}</h4>
      <p>2월 17일 발행</p>
      </div>

      <div className='list'>
      <h4>{글제목[1]}</h4>
      <p>2월 17일 발행</p>
      </div>

      <div className='list'>
      <h4 onClick={() => {
        setModal(!modal)}}>
          {글제목[2]}</h4>         
      <p>2월 17일 발행</p>   
      </div> */}

      { 
        글제목.map(function(a, i){
          return (
          <div className="list" key={i}>
            <h4 onClick={() => {setModal(!modal); setTitle(i)}}>{글제목[i]}
              <span onClick={(e)=>{e.stopPropagation();
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)
              }}>👍</span>{따봉[i]}
            </h4>
            <p>2월 18일 발행</p>
            <button>삭제</button>
          </div>)
        }) 
      }

      <input onChange={(e) => {입력값변경(e.target.value); console.log(입력값)}} />
      <button>업로드</button>
      {/* 이게 이제 컴포넌트 문법 그리고 여기서는 html부분이기 떄문에 if문 
      사용 못한다. 삼향 연산자를 쓰도록 하자. return 값이 있는 조건문이기 떄문이다.*/}
      {
        // props 전송은 부모로 전송 못하고 옆 집으로도 전송 못한다. 패륜 ntr 불가능
        modal == true ? <Modal title = {title}글제목 = {글제목} /> : null
      } 
    </div>
  );
}

function 함수(){
  
}

function Modal(props){
  return (
    <>
    <div className='modal'>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
      </>
  )
}


export default App;
