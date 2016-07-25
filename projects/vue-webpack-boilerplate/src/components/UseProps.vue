<template>
  <div class="hello">
    <p>注意如果 prop 是一个对象或数组，是按引用传递。在子组件内修改它会影响父组件的状态，不管是使用哪种绑定类型.</p>
    <h1>{{ msg }} | {{useMsg}}</h1>
    <input v-model="childMsg" type="text" />
    <button @click="notifyParent">send msg!</button>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
//    props: [
//      'useMsg'
//    ],
    // 属性验证
    props: {
      useMsg: String,
      propA: Number
    },
    data () {
      return {
        msg: 'origin data..',
        childMsg: 'asd'
      }
    },
    ready() {
//      console.log(this.useMsg);
//      console.log(this.$root);
//      console.log(this.$parent);
    },
    methods: {
      notifyParent: function() {
        this.$dispatch('accept-msg', this.childMsg);
        this.childMsg = '';
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
