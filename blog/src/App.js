import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let post = '강남 우동 맛집'; //전역변수 느낌
  // let [글제목1, b] = useState('남자 코트 추천');
  // let [글제목2, c] = useState('강남 우동 맛집');
  // let [글제목3, d] = useState('파이썬 독학');

  let [글제목, a] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])

  let [logo, setLogo] = useState('ReactBlog 블로그');
  

  return (
    <div className='App'>
      <div className='blakc-nav'>
        <h4 style={{color : 'red', fontSize : '16px'}}>{logo}</h4>
      </div>
      <div className='list'>
      <h4>{글제목[0]}</h4>
      <p>2월 17일 발행</p>
      </div>
      <div className='list'>
      <h4>{글제목[1]}</h4>
      <p>2월 17일 발행</p>
      </div>
      <div className='list'>
      <h4>{글제목[2]}</h4>
      <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
