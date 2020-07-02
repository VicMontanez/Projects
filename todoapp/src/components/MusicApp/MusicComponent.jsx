import React , {Component} from 'react'

class MusicComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: 1,
            description: 'Learn Forms',
            targetDate: new Date()
        }
    }
    
    render() {
        return <div>Music Component for id - {this.props.match.params.id}</div>
    }
}

export default MusicComponent