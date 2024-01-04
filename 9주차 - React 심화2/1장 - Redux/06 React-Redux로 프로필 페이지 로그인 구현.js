import React from 'react';
import './App.css';
//2. 가져올 컴포넌트들의 요소를 import 후 아래 App에 추가하세요.
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
    </div>
  );
}

export default App;


//index.js
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./features/user";
// import themeReducer from "./features/theme";
// //1. Provider를 import 후 Provider 컴포넌트를 활용하여 App 컴포넌트를 넣으세요.
// import { Provider } from 'react-redux';

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     theme: themeReducer,
//   },
// });

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//      <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
