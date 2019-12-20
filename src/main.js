import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// ???
// import 'vuetify/dist/vuetify.min.css'

/* eslint-disable no-console */


Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
