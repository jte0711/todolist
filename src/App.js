import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import PointList from './components/pointList';
import InputPoint from './components/inputPoint';
import './App.css';

const backEndUrl = process.env.REACT_APP_LOCAL;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

    this.callGet = this.callGet.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.removePoint = this.removePoint.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    let listContent = {
      list: [
        {
          value: "Hello",
          done: false,
          display: "flex"
        },
        {
          value: "Bro",
          done: false,
          display: "flex"
        },
        {
          value: "Done",
          done: true,
          display: "flex"
        }
      ]
    };

    if (this.props.newUser === true){
      localStorage.setItem("content", JSON.stringify(listContent));
    }
    
    this.callGet();
  }

  callGet(){
    console.log("callGet");
    let temp = [];
    let keys = Object.keys(localStorage);
    let contentArr = JSON.parse(localStorage.getItem(keys)).list;
    console.log(localStorage);
    console.log(contentArr);
    temp = contentArr;
    console.log(temp);
    this.setState({
      todos: temp
    });
  }

  // callGet(){
  //   console.log("call Get");
  //   fetch(backEndUrl, {mode: 'cors'}).then((data)=>{
  //     return data.json();
  //   }).then((dataJson)=>{
  //     this.setState({
  //       todos: dataJson.toDo
  //     });
  //   }).catch((err)=>{
  //     console.log(err);
  //   });
  // }

  removePoint(idx){
    let curList = this.state.todos;
    curList.splice(idx,1);

    localStorage.setItem("content", JSON.stringify({list: curList}));

    this.setState({
      todos: curList
    });
  }

  // removePoint(idx){

  //   axios.post(backEndUrl + '/delete', {pointIdx: idx})
  //   .then((res)=>{
  //       this.callGet();
  //     }).catch((err)=>{
  //       console.log(err);
  //   });

  // }

  toggleCheckbox(id, bool){
    let curList = this.state.todos; 

    if (bool === true){
      curList[id].done = true;
    } else {
      curList[id].done = false;
    }

    localStorage.setItem("content", JSON.stringify({list: curList}));

    this.setState({
      todos: curList
    });
  }

  // toggleCheckbox(id, bool){
  //   let temp = this.state.todos; 

  //   if (bool === true){
  //     temp[id].done = true;
  //   } else {
  //     temp[id].done = false;
  //   }

  //   axios.post(backEndUrl + '/update', {pointIdx: parseInt(id), doneChange: temp[id].done})
  //   .then((res)=>{
  //     this.setState({
  //       todos: temp
  //     });
  //     }).catch((err)=>{
  //       console.log(err);
  //   }); 
    
  // }

  handleSubmit(text){
    console.log("test)");
    let newVal = {
      value: text,
      done: false,
      display: "flex"
    };
    let curList = this.state.todos;
    
    curList.push(newVal);
    localStorage.setItem("content", JSON.stringify({list: curList}));

    this.setState({
      todos: curList
    });
  }
  
  render(){
    console.log("app render");
    console.log("this is the state ", this.state.todos);
    return (
      <div className="todolist">
        {/* <PointList todoList={this.state.todos} removePoint={this.removePoint} toggleCheckbox={this.toggleCheckbox} callGet={this.callGet}/>
        <InputPoint callGet={this.callGet}/> */}
        <PointList todoList={this.state.todos} removePoint={this.removePoint} toggleCheckbox={this.toggleCheckbox}/>
        <InputPoint handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
