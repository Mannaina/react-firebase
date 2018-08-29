import React, { Component } from 'react';

class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            emailError: null,
            passwordError: null,
        }
    }

    handleChange = (e, field) => {
        this.setState({
            [field]: e.target.value
        });
        if (field == 'email') {
            this.setState({
                emailError: ''
            })
        }
        else if (field == 'password') {
            this.setState({
                passwordError: ''
            })
        }
    };

    validateRegex = () => {
        if (this.state.email === "") {
            this.setState({
                emailError: "Please enter the username."
            })
        } else if (!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            this.setState({
                emailError: "Please recheck your login credentials and try again."
            });
        } else {
            this.setState({
                emailError: ""
            })
        }
    }

    handleSubmit = () => {

    }

    handlePassword = () => {
        if (this.state.password === '') {
            this.setState({
                passwordError: 'Please enter the password.'
            })
        }
        else if (this.state.password !== 'hello'){
            this.setState({
                passwordError: 'Please recheck your login credentials and try again.'
            })
        }
    }

    render() {
        return (
            <div>
                <div>Login to Lockton
                    <h5>Email ID</h5>
                    <input
                        type="email"
                        placeholder="enter email"
                        value={this.state.email}
                        onChange={e => {
                            this.handleChange(e, "email");
                        }}
                    />
                </div>
                <span>{this.state.emailError}</span>
                <div>
                    <h5>Password</h5>
                    <input type='password'
                        placeholder='password'
                        value={this.state.password}
                        onChange={e => {
                            this.handleChange(e, "password");
                        }}
                    />
                </div>
                <span>
                    {this.state.passwordError}
                </span>

                <h6>Forget Password? </h6>

                <br />
                <input type='submit' value="Login"
                    onClick={() => {
                        this.handleSubmit();
                        this.validateRegex();
                        this.handlePassword();
                    }} />
            </div>

        );
    }
}

export default LoginPage;
