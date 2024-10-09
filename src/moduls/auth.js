import AuthService from "@/service/auth.js";
import {setItem} from "@/helpers/persistaneStorage.js";


const state = {
    isLoading: false,
    error: null,
    user: null,
    isLogin: null,
}
const mutations = {
    registerStart(state) {
        state.isLoading = true;
        state.user = null;
        state.error = null;
        state.isLogin = null;
        },
    registerSuccess(state, payload) {
        state.isLoading = false;
        state.user = payload;
        state.isLogin = true;
    },
    registerFail(state, payload) {
        state.isLoading = false;
        state.error = payload.errors;
        state.isLogin = null;
    },
    loginStart(state) {
        state.isLoading = true;
        state.user = null;
        state.error = null;
        state.isLogin = null;

    },
    loginSuccess(state, payload) {
        state.isLoading = false;
        state.user = payload;
        state.isLogin = true;

    },
    loginFail(state, payload) {
        state.isLoading = false;
        state.error = payload.errors
        state.isLogin = null;

    },

}

const actions = {

    register(context,user) {
        return new Promise((resolve, reject) => {
            context.commit("registerStart");
            AuthService.register(user).then(response => {
                console.log(response.data.data.token.plainTextToken);
                const token = response.data.data.token.plainTextToken;
                context.commit("registerSuccess", response.data.data);
                setItem('token', token);
                resolve(response.data.data);
            }).catch(error => {
                    context.commit("registerFail", error.response.data);
                    reject(error.response.data);
                })
        })
    },

    login(context, user) {
        return new Promise((resolve, reject) => {
            context.commit("loginStart");
            AuthService.login(user).then(response => {
                console.log(response.data.data.token.plainTextToken);
                const token = response.data.data.token.plainTextToken;
                context.commit("loginSuccess", response.data.data);
                setItem('token', token);
                resolve(response.data.data);
            }).catch(error => {
                context.commit("loginFail", error.response.data);
                reject(error.response.data);
            })
        })
    }
}
export default {
    state, mutations, actions
}