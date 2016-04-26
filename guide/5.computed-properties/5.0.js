var vm = new Vue({
  el: '#app',
  data: {
    a: 1
  },
  computed: {
    b: function() {
      var b = this.a + 1;
      return b;
    },
    c: {
      get: function() {
        console.log('getter trigger');
        var c = this.a + 100;
        return c;
      },
      set: function() {
        console.log('setter trigger');
        var c = c + 1;
      }
    }
  }
});

vm.c = 90;
