import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://campusmanager-66533.firebaseio.com/'
});

export default instance;