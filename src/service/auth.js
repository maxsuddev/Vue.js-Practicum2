import axios from './axios';


const AuthService = {
    register(user) {
        return axios.post('/register', user);
    },
}
export default AuthService;