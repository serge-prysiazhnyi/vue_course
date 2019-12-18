<template>
  <div id="app" class="container">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" class="form-control" v-model.trim="carName">
    </div>
    <div class="form-group">
      <label for="year">Year</label>
      <input type="text" id="year" class="form-control" v-model.number="carYear">
    </div>
    <button class="btn btn-success" @click="createCar">Create car</button>
    <br>
    <button class="btn btn-success mt-3" @click="loadCars">Load cars</button>
    <hr>
    <ul class="list-group">
      <li 
        class="list-group-item"
        v-for="(car, id) in cars"
        :key="id"
      ><strong>{{car.name}}</strong> - {{car.year}}</li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
/* eslint-disable no-console */

const axios = require('axios').default;

export default {
  data() {
    return {
      carName: '',
      carYear: '',
      cars: [],
      resource: null
    }
  },
  methods: {
    createCar() {
      const data = {
        name: this.carName,
        year: this.carYear
      };

      this.resource.save({}, data)

      // axios.post('http://localhost:3000/cars', data)
    },
    loadCars() {
      this.resource.get()
        .then((res)=>{
          return res.json()
        })
        .then((cars)=>{
          this.cars = cars;
        })

      // axios.get('http://localhost:3000/cars')
      //   .then((res)=>{
      //     return res.data;
      //   })
      //   .then((cars)=>{
      //     this.cars = cars;
      //   })
    }
  },
  created() {
    this.resource = this.$resource('cars')
  },
}
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