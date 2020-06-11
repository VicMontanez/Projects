import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Authentication from './AuthenticationService'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent'

class HomeComponent extends Component {
  render() {
      return (
          <div className="Home">
              <Router>
                  <HeaderComponent/>
                  <Switch>
                  <Route path="/" exact component={LoginComponent} />
                  <Route path="/login" component={LoginComponent} />
                  <AuthenticatedRoute path="/welcome/:name" component={MusicApp} />
                  <Route path="/logout" component={LogoutComponent} />
                  <Route component={ErrorComponent}/>
                  </Switch>
                  <FooterComponent/>
              </Router>  
          </div>
      )
  }
}

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn)
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="" className="navbar-brand">Music App</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/about">About us</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link"to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}


//Class Component
class MusicApp extends Component {
    constructor(props){
        super(props)

        this.state = {
            search: 'search',
            output: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.buttonClick = this.buttonClick.bind(this)
    }

    handleChange(event) {
        // console.log(event.target.value);
         this.setState(
             {
                 [event.target.name]: event.target.value
             })
     }

    // buttonClick() {
    //     getDataFromItunes()
    // }

    buttonClick() {
      let url = `https://itunes.apple.com/search?term=${this.state.search}`
  
      fetch(url)
      .then(data => data.json() )
      .then( json => {
          console.log(json)
         
            
         
          //this.state.output = finalHTML
          this.setState({output:json.results})
          console.log(this.state.output)
      })
  }
    
    render () {
        
    return (
      <div className="results">
        <h1>iTunes API App</h1>
        <p>Enter artist here: <input type="text" name="search" value={this.state.search} onChange={this.handleChange}/></p>
        <button onClick={this.buttonClick}>Search</button>
       {
           this.state.output == '' ? <h1>Nothing found</h1> : 
           this.state.output.map((song, index) =>
           <div class="row">
           <div class="col s4 m4 l4">
           <div class="card" style={{width: "8rem"}}>
             <img class="card-img-top" src={song.artworkUrl100} alt="Card image cap"/>
             <div class="card-body">
             <h5 class="card-title">{song.trackCensoredName}</h5>
             <p class="card-text">{song.artistName}</p>
             <a href="#" class="btn btn-primary">More info</a>
             </div>
         </div>
         </div>
         </div>
           )
    }
      </div>
    );
  }
  }


 // function 
 function ErrorComponent() {
  return <div>An Error Occured. I don't know what to do! Contact support at (555)555-5555</div>
}

  export default HomeComponent