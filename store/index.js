export const state = () => ({
  name: 'esc'
})

export const mutations =  {
    CLEAR_STATE(state, payload){
     state.name = payload
  }
}

export const actions = {
    changeName({ commit }, name) {
        commit('CLEAR_STATE', name)
    }
}