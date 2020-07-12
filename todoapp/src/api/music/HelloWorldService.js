import Axios from "axios"
import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService() {
       return axios.get('http://localhost:8080/hello-world');
        //console.log('executed service')
    }

    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean');
         //console.log('executed service')
     }
    
     executeHelloWorldPathVariableService(name) {
        let username = 'username'
        let password = 'password1234'

       let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        ,
        {
            headers: {
                authorization: basicAuthHeader
            }
        }
        );

         //console.log('executed service')
     }

}

export default new HelloWorldService()