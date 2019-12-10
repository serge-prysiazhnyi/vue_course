import Vue from 'vue';
import App from './App.vue';
// import colorDerective from './color';

/* eslint-disable no-console */
// todo
// Vue.derective('colored');

Vue.filter('uppercase', (value) => {
  return value.toUpperCase();
})

// Vue.mixin({
//   beforeCreate() {
//     console.log('beforeCreate');
//   },
// })

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
