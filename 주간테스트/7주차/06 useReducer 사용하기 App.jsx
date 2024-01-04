import React from 'react'
import MemoStore from './MemoStore.js';
import List from './List.jsx';
import Header from './Header.jsx';
import Form from './Form.jsx';
import './App.css';

const App = () => {
  return (
    <MemoStore>
      <Header />
      <Form  />
      <List />
    </MemoStore>
  )
}

export default App
