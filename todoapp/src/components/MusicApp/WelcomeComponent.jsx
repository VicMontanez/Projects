import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WelcomeComponent extends Component {
 
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome <b>{this.props.match.params.name}</b> to the Music API.<br></br>
                    You can search music <Link to="/search">here</Link>
                </div>
                <div>
                    Click here to get a customized message. <button onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>

                </div>
                </>
                )
        }
    }

    export default WelcomeComponent