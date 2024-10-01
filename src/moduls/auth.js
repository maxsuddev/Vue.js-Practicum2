const state = {
    isLoading: false,
}
const mutations = {
    setIsLoading(state) {
    state.isLoading = true;
}
}

const actions = {
    register(context) {
        setTimeout(() => {
            context.commit('setIsLoading')
        }, 3000)
    }
}
export default {
    state, mutations, actions
}