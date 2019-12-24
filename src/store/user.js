/* eslint-disable no-console */

import * as firebase from 'firebase';

class User {
    constructor (id) {
       this.id = id; 
    }
}

export default {
    state: {
        user: null
    },
    getters: {
        getUser(state) {
            return state.user;
        }
    },
    actions: {
        async registerUser({commit}, {email, password}) {
            commit('clearError');
            commit('setLoading', true);
            
            try {
                const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
                commit('setUser', new User(user.iud));
                commit('setLoading', false);
            }
            catch(error) {
                commit('setLoading', false);
                commit('setError', true);
                throw error
            }
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    }
}