import axios from 'axios'
import {API_URL } from '../../Constants'

class MusicDataService {
    retrieveAllMusic(name) {
        return axios.get(`${API_URL}/users/${name}/music`);
         //console.log('executed service')
     }

     retrieveMusic(name, id) {
        return axios.get(`${API_URL}/users/${name}/music/${id}`);
         //console.log('executed service')
     }

     deleteMusic(name, id) {
        return axios.delete(`${API_URL}/users/${name}/music/${id}`);
         //console.log('executed service')
     }
}

export default new MusicDataService