import axios from 'axios'

class MusicDataService {
    retrieveAllMusic(name) {
        return axios.get(`http://localhost:8080/users/${name}/music`);
         //console.log('executed service')
     }

     retrieveMusic(name, id) {
        return axios.get(`http://localhost:8080/users/${name}/music/${id}`);
         //console.log('executed service')
     }

     deleteMusic(name, id) {
        return axios.delete(`http://localhost:8080/users/${name}/music/${id}`);
         //console.log('executed service')
     }
}

export default new MusicDataService