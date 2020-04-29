/* eslint-disable no-console */
import * as fb from "firebase";

class Ad {
    constructor(title, description, ownerId, imageSrc = '', promo = false, id = null) {
        this.title = title;
        this.description = description;
        this.ownerId = ownerId;
        this.imageSrc = imageSrc;
        this.promo = promo;
        this.id = id;
    }
}

export default {
    state: {
        ads: []
    },
    getters: {
        getAds(state) {
            return state.ads;
        },
        getPromoAds(state) {
            return state.ads.filter((ad)=>ad.promo === true);
        },
        getMyAds(state, getters) {
            return state.ads.filter((ad) => {
                // console.log("getMyAds -> ad.ownerId", ad.ownerId)
                // console.log("getMyAds -> getters.user.id", getters.getUser)
                return ad.ownerId === getters.getUser;
            });
        },
        getAdById(state) {
            return (id) => {
                return state.ads.find((ad) => ad.id === id);
            }
        }
    },
    actions: {
        async createAd({commit, getters}, payload) {
            commit('clearError');
            commit('setLoading', true);

            const image = payload.image;

            try {
                const newAd = new Ad(
                    payload.title,
                    payload.description,
                    getters.getUser.id,
                    '',
                    payload.promo
                );
                const ad = await fb.database().ref('ads').push(newAd);
                const imageExt = image.name.slice(image.name.lastIndexOf('.'));
                const fileData = await fb.storage().ref(`ads/${ad.key}.${imageExt}`).put(image);
                const imageSrc = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL();

                await fb.database().ref('ads').child(ad.key).update({
                    imageSrc
                })

                commit('createAd', {
                    ...newAd,
                    imageSrc,
                    id: ad.key
                })
                commit('setLoading', false);
            }
            catch (error) {
                commit('setError', error.message);
                commit('setLoading', false);
                throw error;
            }
        },
        async fetchAds({commit}) {
            commit('clearError');
            commit('setLoading', true);

            const resultAds = [];

            try {
                const fbVal = await fb.database().ref('ads').once('value');
                const ads = fbVal.val();
                Object.keys(ads).forEach((key) => {
                    const ad = ads[key];
                    resultAds.push(
                        new Ad(ad.title, ad.description, ad.ownerId, ad.imageSrc, ad.promo, key)
                    );
                })
                commit('loadAds', resultAds);
                commit('setLoading', false);
            }
            catch(error) {
                commit('setError', error.message);
                commit('setLoading', false);
                throw error
            }
        },
        async updateAd({commit}, {title, description, id}) {
            commit('clearError');
            commit('setLoading', true);

            try {
                await fb.database().ref('ads').child(id).update({
                    title,
                    description
                });
                commit('updateAd', {
                    title,
                    description,
                    id
                });
                commit('setLoading', false);
            }
            catch (error) {
                commit('setError', error.message);
                commit('setLoading', false);
                throw error;
            }
        }
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload);
        },
        loadAds(state, payload) {
            state.ads = payload;
        },
        updateAd(state, {title, description, id}) {
            
            const ad = state.ads.find((item) => {
                return item.id === id
            });

            ad.title = title;
            ad.description = description;
        }
    }
}