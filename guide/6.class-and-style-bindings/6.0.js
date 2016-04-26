var class_a = true;
var class_b = false;
var vm = new Vue({
  el: '#app',
  data: {
    classObject: {
      classA: class_a,
      classB: class_b
    },
    demoClass: {
      fontSize: '15px',
      lineHeight: '20px'
    }
  },
  computed: {
    // TODO
  }
});
