import React from 'react';

const backEndUrl = process.env.REACT_APP_LOCAL;

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

  handleSubmit(e){
    e.preventDefault();
    e.target.reset();
    console.log(this.state);
    this.props.handleSubmit(this.state.newText);
  }

  // handleSubmit(e){
  //   e.preventDefault();
  //   e.target.reset();
  //   console.log("working");
  //   console.log(process.env);
  //   axios.post(backEndUrl + '/submit', this.state)
  //   .then((res)=>{
  //     console.log("calling get");
  //     this.props.callGet();
  //   }).catch((err)=>{
  //     console.log(err);
  //   });
  // }

  render(){
    return (
        <form onSubmit={this.handleSubmit} className="todoForm form-inline d-flex justify-content-center align-items-center">
          <input onChange={this.handleChange} type="text" name="newTodo" className="inputBox form-control" id="inputTodo" aria-describedby="emailHelp" placeholder="Enter your to do"/>
        </form>
    );
  }
}

export default InputPoint;

