<template>
  <div id="app">
    <header>
      <h1>Title</h1>
      <appListManager @add-car="addCar"></appListManager>
    </header>
    <div class="wrapper">
      <app-car 
        v-for="car in cars"
        :key="car.id" 
        :make="car.make"
        :model="car.model"
        :year="car.year"
        :data-id="car.id"
        @delete-car-card="deleteCarCard"
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
      cars: [
        {
          id: 0,
          make: 'test 1',
          model: 'test 1',
          year: '1970',
        },
        {
          id: 1,
          make: 'test 2',
          model: 'test 2',
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
    addCar(make, model, year, id) {
      const newCar = {
        id,
        make,
        model,
        year
      }
      this.cars.push(newCar);
    },
    deleteCarCard(id) {
      let index;
      this.cars.forEach((o, i)=> {
        if(o.id == id) {
          index = i;
        }
      });
      this.cars.splice(index, 1);
      
    }
  },
}
/* eslint-enable no-console */
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  margin-bottom: 60px;

  h1 {
    text-transform: uppercase;
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>