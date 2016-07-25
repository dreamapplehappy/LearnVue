<template>
  <div>
    <p>keep-alive/activate</p>
    <input v-model="msg" type="text" />
    <hr>
    <table>
      <tr is="demo"></tr>
    </table>
    <hr>
    <hello v-ref:hello></hello>
    <hr>
    <p>从子组件接受的消息: {{messagesCollection}}</p>
    <use-props :use-msg="msg"
               v-on:accept-msg="handleIt"
               :prop-a="propA">
    </use-props>
  </div>
</template>
<style>

</style>
<script>
  /* eslint-disable */
  import Hello from './Hello.vue';
  import Demo from './Demo.vue';
  import UseProps from './UseProps.vue';

  export default{
    data(){
      return {
        msg: 'hello vue!',
        propA: 12,
        messagesCollection: []
      }
    },
    components: {
      Hello,
      Demo,
      UseProps
    },
    ready() {
//      console.log(this.$children);
      console.log(this.$refs.hello);
    },
    events: {
      'accept-msg-old': function(msg) {
        this.messagesCollection.push(msg);
      }
    },
    methods: {
      handleIt(msg) {
        this.messagesCollection.push(msg);
      }
    }
  }
</script>
