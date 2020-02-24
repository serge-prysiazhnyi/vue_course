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
        },
        isUserLoggedIn(state) {
            return state.user !== null;
        },

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
                commit('setError', error);
                throw error
            }
        },
        async loginUser({commit}, {email, password}) {
            commit('clearError');
            commit('setLoading', true);
            
            try {
                const user = await firebase.auth().signInWithEmailAndPassword(email, password)
                commit('setUser', new User(user.iud));
                commit('setLoading', false);
            }
            catch(error) {
                commit('setLoading', false);
                commit('setError', error);
                throw error
            }
        },
        autoLoginUser({commit}, payload) {
            commit('setUser', new User(payload.uid));
        },
        logoutUser({commit}) {
            firebase.auth().signOut();
            commit('setUser', null);
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    }
}