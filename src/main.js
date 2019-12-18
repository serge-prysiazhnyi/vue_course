import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
// import colorDerective from './color';

/* eslint-disable no-console */
// todo
// Vue.derective('colored');

Vue.filter('uppercase', (value) => {
  return value.toUpperCase();
})

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3000/';

Vue.http.interceptors.push(request =>{
  
  request.headers.set('Auth', 'token ' + Math.random())
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
