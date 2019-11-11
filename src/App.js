import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import PointList from './components/pointList';
import InputPoint from './components/inputPoint';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos : []
    };
    this.callGet = this.callGet.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.removePoint = this.removePoint.bind(this);
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

  removePoint(idx){

    axios.post('https://todolist-backend123.herokuapp.com/delete', {pointIdx: idx})
    .then((res)=>{
        this.callGet();
      }).catch((err)=>{
        console.log(err);
    });

  }

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
  
  render(){
    console.log("app render");
    return (
      <div className="todolist">
        <PointList todoList={this.state.todos} removePoint={this.removePoint} toggleCheckbox={this.toggleCheckbox} callGet={this.callGet}/>
        <InputPoint/>
      </div>
    );
  }
}

export default App;
