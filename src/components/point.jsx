import React from 'react';

class Point extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(){
    console.log("point called did update");
  }

  componentDidMount(){
    console.log("point called did mount");
  }

  handleChange(e){
    console.log("this is pointId type ", typeof this.props.pointId);
    if (e.target.checked === true && this.props.todoDetails.done !== true){
      this.props.toggleCheckbox(this.props.pointId, true);   
    } else if (e.target.checked === false && this.props.todoDetails.done !== false) {
      this.props.toggleCheckbox(this.props.pointId, false);
    }
  }

  handleClick(e){
    this.props.functions(this.props.pointId);
    // let refId = "ref_" + this.props.pointId;
    // this.refs[refId].checked = false;
    // this.setState({
    //   WordStyle: {textDecoration: "none"}
    // });
  }

  render(){

    console.log("point update");

    let prop = this.props;
    let wordStyle, cbChecked;

    if (prop.todoDetails.done === false){
      wordStyle = {textDecoration: "none"};
      cbChecked = false;
    } else {
      wordStyle = {textDecoration: "line-through"};
      cbChecked = true
    }

    return(
      <div style={{display: prop.todoDetails.display}} className="point justify-content-between align-items-center">
        <label style={wordStyle} className="checkbox">
          <input onChange={this.handleChange} ref={"ref_" + prop.pointId} className="inputCheckbox" type="checkbox" checked={cbChecked}/>
          {prop.todoDetails.value}
        </label>
        <button type="button" onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default Point;
