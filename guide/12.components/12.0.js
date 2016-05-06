var myComponentOne = Vue.extend({
  template: '<div>The first component</div>'
});

Vue.component('my-component-one', myComponentOne);


var vm = new Vue({
  el: '#app'
});
