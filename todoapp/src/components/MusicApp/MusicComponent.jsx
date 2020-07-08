import React , {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import MusicDataService from '../../api/music/MusicDataService.js'
import AuthenticationService from './AuthenticationService.js'

class MusicComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: 1,
            description: 'Learn Forms',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName()
        MusicDataService.retrieveMusic(username, this.state.id)
        .then(response => this.setState({
            description: response.data.description,
            targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
    }

    validate(values) {
        let errors = {}
        if(!values.description) {
            errors.description = 'Enter a Description'
        } else if(values.description.length<5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }

        if(!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid target date'
        }
        
        return errors

    }

    onSubmit(values) {
        console.log(values)
    }
    
    render() {
        let description = this.state.description
        let targetDate = this.state.targetDate
        return (
        <div>
            <h1>Music</h1>
            <div className="container">
                <Formik
                    initialValues={{ 
                        description: description,
                        targetDate: targetDate,
                    }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false} //by default formik has onChange
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                 <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                 <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
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