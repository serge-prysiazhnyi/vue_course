<template>
  <div id="app">
    <app-car 
      :name="name" 
      :desc='desc' 
      :year="year"
    ></app-car>
  </div>
</template>

<script>
import Car from './components/car.vue'

export default {
  data() {
    return {
      name: 'test',
      desc: 'test',
      year: 1970
    }
  },
  name: 'app',
  components: {
    appCar: Car
  },
  methods: {
    
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>