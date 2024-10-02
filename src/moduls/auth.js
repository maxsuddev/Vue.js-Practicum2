import AuthService from "@/service/auth.js";
import {setItem} from "@/helpers/persistaneStorage.js";


const state = {
    isLoading: false,
    error: null,
    user: null,
}
const mutations = {
    registerStart(state) {
        state.isLoading = true;
        state.user = null;
        state.error = null;
        },
    registerSuccess(state, payload) {
        state.isLoading = false;
        state.user = payload
    },
    registerFail(state, payload) {
        state.isLoading = false;
        state.error = payload
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
            })
                .catch(error => {
                    context.commit("registerFail", error.response.data);
                    reject(error.response.data);
                })
        })
    }
}
export default {
    state, mutations, actions
}