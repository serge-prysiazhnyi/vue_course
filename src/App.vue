<template>
  <div id="app">
    <header>
      <appListManager :addCar="addCar"></appListManager>
    </header>
    <div class="wrapper">
      <app-car 
        v-for="car in cars"
        :key="car.id" 
        :name="car.name"
        :desc="car.desc"
        :year="car.year"
      ></app-car>
    </div>
  </div>
</template>

<script>
import Car from './components/car.vue';
import ListManager from './components/listManager';

export default {
  data() {
    return {
      cars: [
        {
          id: 0,
          name: 'test 1',
          desc: 'test 1',
          year: 1970,
        },
        {
          id: 1,
          name: 'test 2',
          desc: 'test 2',
          year: 2019,
        },
      ]
    }
  },
  name: 'app',
  components: {
    appCar: Car,
    appListManager: ListManager
  },
  methods: {
    addCar( ) {
      // const newCar = {
      //   name,
      //   desc,
      //   year
      // }
      // this.cars.push(newCar);
    }
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
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>