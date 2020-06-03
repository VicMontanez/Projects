import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Switch>
                    <Route path="/" exact component={LoginComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/welcome:name" component={WelcomeComponent} />
                    <Route component={ErrorComponent}/>
                    </Switch>
                </Router>
                
                
                {/* <LoginComponent/> */}
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome{this.props.match.params.name}!</div>
    }
}

function ErrorComponent() {
    return <div>An Error Pccured. I don't know what to do! Contact support at (555)555-5555</div>
}

//Login Component

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
        if(this.state.username === "username" && this.state.password=== "password1234"){
            this.props.history.push(`/welcome/${this.state.username}`);
            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginFailed:false})
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
        
        //console.log(this.state)
    }

    render() {
        return (
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful!</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
           </div>
        )
    }

}

// function ShowInvalidCredentials(props) {
//       if(props.hasLoginFailed) {
//           return <div>Invalid Credentials</div>
//       }  
//       return null
// }

// function ShowLoginSuccessMessage(props) {
//     if (props.showSuccessMessage) {
//         return <div>Success!</div>
//     }
//     return null
// }

export default TodoApp