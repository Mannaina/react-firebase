import React, { Component } from 'react';
import {fetchUserData} from './../firebase/db';
import LoginPage from './LoginPage';
// import {db} from "./../firebase";

class App extends Component {

  constructor (){
    super()
    this.state={
      userdata:null
    }
  }
componentDidMount(){
  fetchUserData().then((response)=>{
    this.setState({
      userdata:response.val()
    })
  }).catch((error)=>{
console.log("error", error)
  })
}

  render() {
    const userName = this.state.userdata!=null?this.state.userdata.map((data)=>{
      return(
        <li key={data.CanonicalName}>
        {data.Name}
        </li>
      )
    }): null;
    console.log(this.state.userdata)
    return (
      <div>
        <LoginPage/>
        <ol>
          {userName}
          </ol>
              </div>
    );
  }
}

export default App;
