import Vue from 'vue';
import App from './App.vue';
// import colorDerective from './color';

// todo
// Vue.derective('colored');
Vue.filter('uppercase', (value) => {
  return value.toUpperCase();
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
