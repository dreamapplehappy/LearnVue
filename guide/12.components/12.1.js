var myComponent = Vue.extend({
  template: '#my-component'
});

var homeComponent = Vue.extend({
  template: '#home-component',
  // activate: function (done) {
  //   // 这里使用 var self = this 很重要
  //   var self = this
  //   loadDataAsync(function (data) {
  //     self.someData = data
  //     done()
  //   })
  // }
});

var tabComponent = Vue.extend({
  template: '#tab-component'
});

Vue.component('my-component', myComponent);
Vue.component('home-component', homeComponent);
Vue.component('tab-component', tabComponent);

var vm = new Vue({
  el: '#app',
  data: {
    componentID: 'home',
    componentId: 'home'
  },
  methods: {
    changeComponent: function() {
      this.componentID = this.componentId;
    }
  },
  components: {
    home: homeComponent,
    tab: tabComponent
  }
});
