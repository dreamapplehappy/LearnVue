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
        console.log('getter trigger', this.a);
        var c = this.a + 100;
        return c;
      },
      set: function(newValue) {
        console.log('setter trigger', newValue);
        this.a = 8;
      }
    }
  }
});

vm.c = 90;
