import React from 'react';
import './App.css';
import Student from './components/Student';

function App() {
    const stud1 = {
        name: '민수',
        subject: '수학',
        score: 90
    }

    const stud2 = {
        naem: '길동',
        subject: '영어',
        score: 72
    }

  return (
    <div className="App">
        <Student student = {stud1} />
        <Student student = {stud2} />
    </div>
  );
}

export default App;
