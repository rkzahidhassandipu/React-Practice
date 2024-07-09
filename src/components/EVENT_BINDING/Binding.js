import React, { Component } from 'react'

export default class Binding extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
      this.handleClink = this.handleClink.bind(this)
    }

    // handleClink = () => {
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    // }

    handleClink (){
        this.setState({
            count : this.state.count + 1
        })
    }




  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClink}>Increase</button> 
        {/* // bind(this) */}
      </div>
    )
  }
}
