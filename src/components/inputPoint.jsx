import React from 'react';
import axios from 'axios';

class InputPoint extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newText: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      newText: event.target.value
    });
  }

  handleSubmit(event){
    axios.post('https://todolist-backend123.herokuapp.com/submit', this.state)
    .then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
  }

  render(){
    return (
        <form onSubmit={this.handleSubmit} className="todoForm form-inline d-flex justify-content-center align-items-center">
          <input onChange={this.handleChange} type="text" name="newTodo" className="inputBox form-control" id="inputTodo" aria-describedby="emailHelp" placeholder="Enter your to do"/>
        </form>
    );
  }
}

export default InputPoint;
