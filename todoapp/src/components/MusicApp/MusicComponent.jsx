import React , {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field } from 'formik'

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
        let description = this.state.description
        let targetDate = this.state.targetDate
        return (
        <div>
            <h1>Music</h1>
            <div className="container">
                <Formik>
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"/>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label></label>
                                    <Field className="form-control" type="date" name="targetDate"/>
                                </fieldset>
                                <button className="btn- btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
           Music Component for id - {this.props.match.params.id}
            
            </div>
        )
    }
}

export default MusicComponent