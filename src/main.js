import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import * as firebase from 'firebase';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// ???
// import 'vuetify/dist/vuetify.min.css'

/* eslint-disable no-console */


Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyCyOJqrVGf_siGquraEcOmbvzo_ey4MCx0",
      authDomain: "vuecourse-5779d.firebaseapp.com",
      databaseURL: "https://vuecourse-5779d.firebaseio.com",
      projectId: "vuecourse-5779d",
      storageBucket: "vuecourse-5779d.appspot.com",
      messagingSenderId: "999070936023",
      appId: "1:999070936023:web:bd2e7357a73547eb3eb992",
      measurementId: "G-RBVF1WQ684"
    };

    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds');
  },
  render: h => h(App)
}).$mount('#app')
