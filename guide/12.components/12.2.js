var template = '<div>\
  <h3>{{item.name}}| <span>{{index}}</span></h3>\
</div>';

// 不自动把 item 注入组件的原因是这会导致组件跟当前 v-for 紧密耦合。显式声明数据来自哪里可以让组件复用在其它地方
var myComponent = Vue.extend({
  props:{
    item: Object,
    index: Number
  },
  template: template
});

Vue.component('my-component', myComponent);

var vm = new Vue({
  el: 'body',
  data: {
    items: [
      {name: 'item1'},
      {name: 'item2'}
    ]
  }
})
