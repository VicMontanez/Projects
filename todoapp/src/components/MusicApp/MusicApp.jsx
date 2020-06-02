import React, {Component} from 'react'

//Class Component
class MusicApp extends Component {
    render () {
    return (
      <div className="MuiscApp">
        <h1>iTunes API App</h1>
        <p>Enter artist here: <input id="search" /></p>
        
      </div>
    );
  }
  }

  export default MusicApp