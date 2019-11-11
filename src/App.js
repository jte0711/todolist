import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import PointList from './components/pointList';
import InputPoint from './components/inputPoint';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   todos : [
    //     {
    //       value: "Hello",
    //       done: false,
    //       display: "flex"
    //     },
    //     {
    //       value: "World",
    //       done: false,
    //       display: "flex"
    //     }
    //   ]
    // };

    this.state = {
      todos: []
    };
    this.callGet = this.callGet.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.removePoint = this.removePoint.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  callGet(){
    console.log("call Get");
    fetch("https://todolist-backend123.herokuapp.com/", {mode: 'cors'}).then((data)=>{
      return data.json();
    }).then((dataJson)=>{
      this.setState({
        todos: dataJson.toDo
      });
    }).catch((err)=>{
      console.log(err);
    });
  }

  // removePoint(idx){
  //   let tempList = this.state.todos;
  //   tempList.splice(idx,1);
  //   this.setState({
  //     todos: tempList
  //   });
  // }

  removePoint(idx){

    axios.post('https://todolist-backend123.herokuapp.com/delete', {pointIdx: idx})
    .then((res)=>{
        this.callGet();
      }).catch((err)=>{
        console.log(err);
    });

  }

  // toggleCheckbox(id, bool){
  //   let temp = this.state.todos; 

  //   if (bool === true){
  //     temp[id].done = true;
  //   } else {
  //     temp[id].done = false;
  //   }

  //   this.setState({
  //     todos: temp
  //   })
  // }

  toggleCheckbox(id, bool){
    let temp = this.state.todos; 

    if (bool === true){
      temp[id].done = true;
    } else {
      temp[id].done = false;
    }

    axios.post('https://todolist-backend123.herokuapp.com/update', {pointIdx: parseInt(id), doneChange: temp[id].done})
    .then((res)=>{
      this.setState({
        todos: temp
      });
      }).catch((err)=>{
        console.log(err);
    }); 
    
  }

  // handleSubmit(text){
  //   console.log("test)");
  //   let newVal = {
  //     value: text,
  //     done: false,
  //     display: "flex"
  //   };
    
  //   let curList = this.state.todos;
  //   console.log(curList);
  //   curList.push(newVal);
  //   console.log(curList);
  //   this.setState({
  //     todos: curList
  //   });
  // }
  
  render(){
    console.log("app render");
    return (
      <div className="todolist">
        <PointList todoList={this.state.todos} removePoint={this.removePoint} toggleCheckbox={this.toggleCheckbox} callGet={this.callGet}/>
        <InputPoint callGet={this.callGet}/>
        {/* <PointList todoList={this.state.todos} removePoint={this.removePoint} toggleCheckbox={this.toggleCheckbox}/> */}
        {/* <InputPoint handleSubmit={this.handleSubmit}/> */}
      </div>
    );
  }
}

export default App;
