<template>
  <h1>Hello World! {{name}} == {{dd}}</h1>
</template>

<script>
  /* eslint-disable */
  import Hello from '../components/Hello'

  export default {
    data() {
      console.warn('data ')
      return {
        name: 'Vue.js',
        dd: "asd"
      }
    },
    components: {
      Hello
    },
    route: {
      data() {
        console.warn(123)
        this.name = 2
        return {
          dd: 3
        }
      }
    }
  }
</script>

<style lang="css" scoped>
  h1 {
    background-color: #f8f8f8;
    color: #000;
  }
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>
