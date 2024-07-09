import React, { Component } from 'react';

export default class State_class extends Component {

  constructor(props){
    super(props)
      this.state = {
        count : 0
      }
  }

  handleIncrement = () => {
    this.setState({
      count : this.state.count + 1
    })
  }

  handleDecrement = () => {
    this.setState({
      count : this.state.count - 1
    })
  }



  render() {
    const {count} = this.state
    return (
      <div>
        <div>
          <h1>Count : {count}</h1>
          <button className='btn-count' disabled={count === 10? true : false} onClick={this.handleIncrement}>+</button>
          <button className='btn-count' disabled={count === 0? true : false} onClick={this.handleDecrement}>-</button>
        </div>
      </div>
    )
  }
}

