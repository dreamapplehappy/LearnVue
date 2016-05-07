// 全局的一个组件
var myComponentOne = Vue.extend({
  props: [
    'myMsg'
  ],
  template: '<div>The first component msg: {{myMsg}}</div>'
});
// 子组件
var child = Vue.extend({
  props: ['childMsg'],
  template: '<div>This part is child msg: {{childMsg}}</div>'
});
// 父组件
var parent = Vue.extend({
  data: function() {
    return {
      parentMsg: ':Parent Msg:'
    }
  },
  template: '<div>\
  <div>This part is parent, parent self data: {{parentMsg}}</div>\
             <div>\
             <input type="text" v-model="parentMsg">\
             <child :child-msg="parentMsg"></child>\
             </div>\
  </div>',
  components: {
    child: child
  }
});

Vue.component('my-component-one', myComponentOne);
Vue.component('parent', parent);


var vm = new Vue({
  el: '#app'
});
