import React, { Component } from 'react';
import Homepage from './Homepage';
import Login from './Login';



class Index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false //true
      }
    }
  render() {
    const {isLoggedIn} = this.state;
    let element;
    
    // if(isLoggedIn){
    //     element = <Homepage />
    // }
    // else{
    //     element = <Login />
    // }


    element = isLoggedIn ? <Homepage /> : <Login />
    return (
        <div>
            {element}
            {isLoggedIn ? <Homepage /> : <Login />}
            {/* {isLoggedIn && <Homepage />} */}
        </div>
    )






    // if(this.state.isLoggedIn){
    //     return <Homepage />
    // }
    // else{
    //     return <Login />
    // }
  }
}


export default Index;
