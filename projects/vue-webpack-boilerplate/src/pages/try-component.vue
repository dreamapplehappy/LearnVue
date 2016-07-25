<template>
  <section>
    <h1>下面是Vue组件的使用部分</h1>
    <learn-vue-component></learn-vue-component>
  </section>
</template>

<script>
  /* eslint-disable */
  import LearnVueComponent from '../components/LearnVueComponent';

  export default {
    components: {
      LearnVueComponent
    },
    props: ['msg'],
    data() {
      return {
        a: 'dream'
      }
    }
  }
</script>

<style lang="css" scoped>

</style>
