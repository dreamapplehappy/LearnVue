<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <slot name="header">没有header显示我</slot>
    <slot name="footer">没有footer显示我</slot>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'xx--'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
