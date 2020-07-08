import React, { Component } from 'react'
import MusicDataService from '../../api/music/MusicDataService'
import AuthenticationService from './AuthenticationService.js'

class ListMusicComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            music: [],
            message: null
        }
        this.deleteMusicClicked = this.deleteMusicClicked.bind(this)
        this.updateMusicClicked = this.updateMusicClicked.bind(this)
        this.refreshMusic = this.refreshMusic.bind(this)
    }

    componentDidMount() {
        this.refreshMusic();
}

refreshMusic() {
    let username = AuthenticationService.getLoggedInUserName()
    MusicDataService.retrieveAllMusic(username)
    .then(
        response => {
            this.setState({music: response.data})
        }
    )
}

deleteMusicClicked(id) {
    let username = AuthenticationService.getLoggedInUserName()
   // console.log(id + " " + username); 
   MusicDataService.deleteMusic(username, id)
   .then(
       response => {
           this.setState({message: `Delete of song ${id} Successful`})
           this.refreshMusic()
        }
   )
}

updateMusicClicked(id) {
    //console.log('update ' + id)
    this.props.history.push(`/music/${id}`)
//     let username = AuthenticationService.getLoggedInUserName()
//    // console.log(id + " " + username); 
//    MusicDataService.deleteMusic(username, id)
//    .then(
//        response => {
//            this.setState({message: `Delete of song ${id} Successful`})
//            this.refreshMusic()
//         }
//    )
}

render(){
    return(
        <div>
             <h4>Here is what is topping the charts today!</h4>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Artist Name</th>
                                <th>Date</th>
                                <th>Song Name</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.music.map(
                                    music =>
                                        <tr key={music.id}>
                                            <td>{music.username}</td>
                                            <td>{music.description}</td>
                                            <td>{music.targetDate}</td>
                                            <td>{music.isDone}</td>
                                    
                                            <td><button className="btn btn-success" onClick={() => this.updateMusicClicked(music.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteMusicClicked(music.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                        </table>
                        <div className="row">
                            <button className="btn btn-success">Add</button>
                        </div>
                        </div>
        </div>
    )
}

}

export default ListMusicComponent
