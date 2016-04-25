var vm = new Vue({
  el: '#app',
  data: {
    msg: 'Hello,World!'
  },
  methods: {
    changeMsg: function() {
      this.msg = 'change my value'
    }
  }
});
