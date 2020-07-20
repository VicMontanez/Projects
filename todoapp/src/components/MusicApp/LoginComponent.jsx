import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'
import '../../App.css'


class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'username',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        //this.handleUsernameChange = this.handleUsernameChange.bind(this)
        //this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
       // console.log(event.target.value);
        this.setState(
            {
                [event.target.name]: event.target.value
            })
    }

    // handlePasswordChange(event) {
    //     this.setState({password: event.target.value})
    // }

    loginClicked() {
        // if(this.state.username === "username" && this.state.password=== "password1234"){
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`);
        //     //this.props.history.push("/search")
        //     //this.setState({showSuccessMessage:true})
        //     //this.setState({hasLoginFailed:false})
        // }
        // else {
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        // }
        
        AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        .then(
            () => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                this.props.history.push(`/welcome/${this.state.username}`);
            }
        ).catch ( () => {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true}) 
        })
        //console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div>
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful!</div>}
                    {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
           </div>
        )
    }

}

export default LoginComponent