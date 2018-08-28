import React,{Component} from 'react'

class LoginPage extends Component{
    constructor(){
        super()
        this.state={
            email: "",
            password : ""
        }
    }
    render(){
        return(
<div>
    <input type = 'text' placeholder = 'enter your email address'/>
    <input type = 'password' placeholder = 'password'/>
    <button>Submit</button>
    </div>

        );
    }
}

export default LoginPage;