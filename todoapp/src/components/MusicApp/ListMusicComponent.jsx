import React, { Component } from 'react'
import MusicDataService from '../../api/music/MusicDataService'
import AuthenticationService from './AuthenticationService.js'

class ListMusicComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            music: []
        }
    }

    componentDidMount() {
    let username = AuthenticationService.getLoggedInUserName
    MusicDataService.retrieveAllMusic(username)
    .then(
        response => {
            this.setState({music: response.data})
        }
    )
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
                                    
                                            <td><button className="btn btn-success">Update</button></td>
                                            <td><button className="btn btn-warning">Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                        </table>
                        </div>
        </div>
    )
}

}

export default ListMusicComponent
