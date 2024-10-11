import axios from './axios';


const AuthService = {
    register(user) {
        return axios.post('/register', user);
    },
    login(user) {
        return axios.post('/login', user);
    },
    getUser(){
        return axios.get('/user');
    }
}
export default AuthService;