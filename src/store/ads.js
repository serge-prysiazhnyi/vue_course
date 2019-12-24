/* eslint-disable no-console */

export default {
    state: {
        ads: [
            {
                title: 'First ad',
                desc: 'lorem',
                promo: true,
                imageSrc: 'https://images.unsplash.com/photo-1575138312433-d42e9f176f6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                id: '1'
            },
            {
                title: 'Second ad',
                desc: 'lorem',
                promo: true,
                imageSrc: 'https://images.unsplash.com/photo-1575149536487-4c9ac49fc258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                id: '2'
            },
            {
                title: 'Third ad',
                desc: 'lorem',
                promo: false,
                imageSrc: 'https://images.unsplash.com/photo-1538097304804-2a1b932466a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1650&q=80',
                id: '3'
            },
            {
                title: 'Fourth ad',
                desc: 'lorem',
                promo: false,
                imageSrc: 'https://images.unsplash.com/photo-1576807126558-7d2fcb6f6180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                id: '4'
            },
        ]
    },
    getters: {
        getAds(state) {
            return state.ads;
        },
        getPromoAds(state) {
            return state.ads.filter((ad)=>ad.promo === true);
        },
        getMyAds(state) {
            return state.ads;
        },
        getAdById(state) {
            return (id) => {
                console.log("TCL: getAdById -> id", id)
                
                console.log("TCL: getAdById -> state.ads", state.ads.filter((ad) => ad.id === id))
                return state.ads.find((ad) => ad.id === id);
            }
        }
    },
    actions: {
        createAd({commit}, payload) {
            payload.id = Math.round(Math.random * (1000 - 10) + 10).toString();
            commit('createAd', payload)
        }
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload);
        }
    }
}