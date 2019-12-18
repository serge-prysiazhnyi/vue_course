<template>
  <div id="app" class="container">
    
  </div>
</template>

<script>
/* eslint-disable */
/* eslint-disable no-console */

export default {
  data() {
    return {
      
    }
  }
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