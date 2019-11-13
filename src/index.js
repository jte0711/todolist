import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Testing
// localStorage.setItem("Hello", JSON.stringify({
//   value: "Hello",
//   done: false,
//   display: "flex"
// }));

// localStorage.setItem("World", JSON.stringify({
//   value: "World",
//   done: false,
//   display: "flex"
// }));


let newUser = false;

if (localStorage.length === 0){
  newUser = true;
}

ReactDOM.render(<App newUser={newUser}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
