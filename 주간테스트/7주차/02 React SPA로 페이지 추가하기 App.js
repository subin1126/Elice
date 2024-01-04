import React from "react";
import "./App.css";
// 필요한 파일 및 패키지를 import하세요.
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';


function App() {
  // 지시사항을 참고하여 코드를 작성하세요.
  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;