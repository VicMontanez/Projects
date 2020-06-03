import React, {Component} from 'react'

//Class Component
class MusicApp extends Component {
    constructor(props){
        super(props)

        this.state = {
            search: 'search'
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
      })
  }
    
    render () {
    return (
      <div className="MusicApp">
        <h1>iTunes API App</h1>
        <p>Enter artist here: <input type="text" name="search" value={this.state.search} onChange={this.handleChange}/></p>
        <button onClick={this.buttonClick}>Search</button>
      </div>
    );
  }
  }

 // function 

  export default MusicApp