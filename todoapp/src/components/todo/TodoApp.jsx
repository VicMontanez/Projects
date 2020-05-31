import React, { Component } from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent/>
            </div>
        )
    }
}

//Login Component

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'username',
            password: ''
        }
    }
    render() {
        return (
            <div>
            User Name: <input type="text" nane="username" value={this.state.username}/>
            Password: <input type="password" name="password"/>
            <button>Login</button>
           </div>
        )
    }
}

export default TodoApp