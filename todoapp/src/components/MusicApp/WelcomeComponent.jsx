import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/music/HelloWorldService'
class WelcomeComponent extends Component {
 constructor(props){
     super(props)
     this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
     this.state = {
        welcomeMessage: ''
    }
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome <b>{this.props.match.params.name}</b> to the Music API.<br></br>
                    You can search music <Link to="/search">here</Link>
                </div>
                <div>
                    Click here to get a customized message. 
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className= "container">
                    {this.state.welcomeMessage}
                </div>
                </>
                )
        }

        retrieveWelcomeMessage() {
            HelloWorldService.executeHelloWorldService()
            .then(response => this.handleSuccessfulResponse(response))
            //.catch()
        }

        handleSuccessfulResponse(response) {
          this.setState({welcomeMessage: response.data})
            
        }
    }

    export default WelcomeComponent