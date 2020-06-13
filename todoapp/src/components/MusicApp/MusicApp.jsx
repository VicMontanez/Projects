import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Authentication from './AuthenticationService'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import SearchComponent from './SearchComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'


class HomeComponent extends Component {
  render() {
      return (
          <div className="Home">
              <Router>
                  <HeaderComponent/>
                  <Switch>
                  <Route path="/" exact component={LoginComponent} />
                  <Route path="/login" component={LoginComponent} />
                  <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                  <AuthenticatedRoute path="/search" component={SearchComponent} />
                  <Route path="/logout" component={LogoutComponent} />
                  <Route component={ErrorComponent}/>
                  </Switch>
                  <FooterComponent/>
              </Router>  
          </div>
      )
  }
}





  export default HomeComponent