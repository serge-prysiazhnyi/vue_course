<template>
  <div id="app">
    <header>
      <appListManager @submit="addCar"></appListManager>
    </header>
    <div class="wrapper">
      <app-car 
        v-for="car in cars"
        :key="car.id" 
        :make="car.make"
        :model="car.model"
        :year="car.year"
        :data-id="car.id"
        @closeCard="closeCard"
      ></app-car>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import Car from './components/car.vue';
import ListManager from './components/listManager';

export default {
  data() {
    return {
      counter: 999,
      cars: [
        {
          id: 0,
          make: 'Ford',
          model: 'Mustang',
          year: '1970',
        },
        {
          id: 1,
          make: 'Dodge',
          model: 'Ram 1500',
          year: '2019',
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
    addCar(make, model, year) {
      const newCar = {
        id: this.counter++,
        make,
        model,
        year
      }
      this.cars.push(newCar);
    },
    closeCard(id) {
      this.cars = this.cars.filter((item) => item.id != id);
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