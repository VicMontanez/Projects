import React , {Component} from 'react'
import moment from 'moment'
import { Formik } from 'formik'

class MusicComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: 1,
            description: 'Learn Forms',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }
    
    render() {
        return <div>
            <h1>Music</h1>
            <div class="container">
                <Formik>
                    {
                        (props) => (
                            <div>Something</div>
                        )
                    }
                </Formik>
            </div>
            Music Component for id - {this.props.match.params.id}
            
            </div>
    }
}

export default MusicComponent