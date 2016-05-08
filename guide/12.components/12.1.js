var myComponent = Vue.extend({
  template: '#my-component'
});

Vue.component('my-component', myComponent);

var vm = new Vue({
  el: '#app'
});
