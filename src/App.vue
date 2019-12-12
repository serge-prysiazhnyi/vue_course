<template>
  <div id="app" class="container">
    <ul class="nav nav-pills">
      <!-- <li class="nav-item">
        <router-link class="nav-link active" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/cars">Cars</router-link>
      </li> -->
      <router-link tag="li" exact class="nav-item" to="/" active-class="active">
        <a class="nav-link">Home</a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/cars" active-class="active">
        <a class="nav-link">Cars</a>
      </router-link>

      <router-link tag="li" class="nav-item" to="/car/3" active-class="active">
        <a class="nav-link">Car 3</a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/car/4" active-class="active">
        <a class="nav-link">Car 4</a>
      </router-link>
    </ul>


    <router-view></router-view>

    <!-- <header>
      <h1>Title</h1>
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
    <app-test>
      <h6 slot="title">
        Lorem, ipsum dolor.
      </h6>
      <p slot="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, explicabo.
      </p>
    </app-test>
    <app-list-sample></app-list-sample>
    <hr>
    <app-form></app-form>
    <app-on-off v-model="switched"></app-on-off>
    <appValidationSample></appValidationSample> -->
  </div>
</template>

<script>
/* eslint-disable */
/* eslint-disable no-console */
import Car from './components/car.vue';
import ListManager from './components/listManager';
import Test from './components/test';
import ListSample from './components/listSample';
import Form from './components/form';
import OnOff from './components/onOff';
import ValidationSample from './components/validationSample';


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
      ],
      switched: false
    }
  },
  name: 'app',
  components: {
    appCar: Car,
    appListManager: ListManager,
    appTest: Test,
    appListSample: ListSample,
    appForm: Form,
    appOnOff: OnOff,
    appValidationSample: ValidationSample
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
.container {
  max-width: 1200px;
  margin: auto;
  padding-bottom: 25px;
  @media screen and (max-width:1366px) {
    max-width: 1024px;
  }
  @media screen and (max-width:1024px) {
    max-width: 90%;
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>