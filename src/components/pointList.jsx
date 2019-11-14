import React from 'react';
import Point from './point';

class PointList extends React.Component{
  
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    // console.log("pointlist did mount");
    // this.props.callGet();
  }

  componentDidUpdate(){
    // console.log("pointlist update");
  }

  handleClick(idx){
    this.props.removePoint(idx);
  }

  createPoints(){
    // console.log("creating points");
    let propsList = this.props.todoList;
    let htmlTags = [];

    for(let i = 0; i < propsList.length; i++){
      htmlTags.push(<Point key={i.toString()} pointId={i.toString()} toggleCheckbox={this.props.toggleCheckbox} functions={this.handleClick} todoDetails={propsList[i]}/>);
    }
    return htmlTags;
  }

  render(){
    // console.log("pointlist render");
    return(
      <div className="pointList">
        {this.createPoints()}
      </div>
    );
  }
}

export default PointList;