import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class HomeComponent extends Component {
  render() {
      return (
          <div className="TodoApp">
              <Router>
                  <Switch>
                  <Route path="/" exact component={LoginComponent} />
                  <Route path="/login" component={LoginComponent} />
                  <Route path="/welcome/:name" component={MusicApp} />
                  <Route component={ErrorComponent}/>
                  </Switch>
              </Router>
              
              
          </div>
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
      <div className="MusicApp">
        <h1>iTunes API App</h1>
        <p>Enter artist here: <input type="text" name="search" value={this.state.search} onChange={this.handleChange}/></p>
        <button onClick={this.buttonClick}>Search</button>
       {
           this.state.output == '' ? <h1>Nothing found</h1> : 
           this.state.output.map((song, index) =>
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
           )
    }
      </div>
    );
  }
  }


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

 // function 
 function ErrorComponent() {
  return <div>An Error Occured. I don't know what to do! Contact support at (555)555-5555</div>
}

  export default HomeComponent