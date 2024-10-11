import AuthService from "@/service/auth.js";
import {removeItem, setItem} from "@/helpers/persistaneStorage.js";
import {getterTypes} from "@/moduls/types.js";


const state = {
    isLoading: false,
    error: null,
    user: null,
    isLogin: null,
}

const getters = {
    [getterTypes.currentUser]: state => {
        return state.user
    },
    [getterTypes.isLoggedIn]: state => {
        return Boolean(state.isLogin)
    },
    [getterTypes.isAnonymous]: state => {
        return state.isLogin === false
    }
}
const mutations = {
    registerStart(state) {
        state.isLoading = true;
        state.user = null;
        state.error = null;
        state.isLogin = false;
        },
    registerSuccess(state, payload) {
        state.isLoading = false;
        state.user = payload;
        state.isLogin = true;
    },
    registerFail(state, payload) {
        state.isLoading = false;
        state.error = payload.errors;
        state.isLogin = false;
    },
    loginStart(state) {
        state.isLoading = true;
        state.user = null;
        state.error = null;
        state.isLogin = false;

    },
    loginSuccess(state, payload) {
        state.isLoading = false;
        state.user = payload;
        state.isLogin = true;

    },
    loginFail(state, payload) {
        state.isLoading = false;
        state.error = payload.errors
        state.isLogin = false;
    },
    getUserStart(state) {
        state.isLoading = true;

    },
    getUserSuccess(state, payload) {
        state.isLoading = false;
        state.user = payload;
        state.isLogin = true;

    },
    getUserFail(state) {
        state.isLoading = false;
        state.user = null
        state.isLogin = false;
    },

    logout(state) {
        state.isLogin = false;
        state.user = null;
        state.error = null;

    }


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
    },

    getUser(context) {
        return new Promise(resolve => {
            context.commit("getUserStart");
            AuthService.getUser()
                .then(response => {
                    context.commit("getUserSuccess", response.data.data);
                    resolve(response.data.data);
            })
                .catch(() => context.commit("getUserFail"));
        })
    },
    logout(context) {
        context.commit('logout');
        removeItem('token')
    }
}
export default {
    state, mutations, actions, getters
}