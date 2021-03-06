import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  changeColor = () => {
    const newColor = this.props.getNewColor()
    // console.log(this.props.color)
    // console.log(this.props.getNewColor())
    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}>
      </div>
    )
  }

}
