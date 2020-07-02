import React , {Component} from 'react'

class MusicComponent extends Component {
    render() {
        return <div>Music Component for id - {this.props.match.params.id}</div>
    }
}

export default MusicComponent