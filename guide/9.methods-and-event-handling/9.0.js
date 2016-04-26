var vm = new Vue({
  el: '#app',
  data: {
    name: 'dreamapple'
  },
  methods: {
    showName: function(event) {
      alert(this.name);
      console.log(event.target);
      console.log(event.target.name);
    },
    say: function(name, event) {
      alert('Hi, ' + name + ' !');
      console.log(event.target.name);
    },
    hello: function(event) {
      event.preventDefault();
      console.log(123);
    }
  }
});
