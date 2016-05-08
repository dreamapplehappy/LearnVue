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
      parentMsg: '| from parent component!'
    }
  },
  template: '<div>\
  <div>This part is parent, parent self data</div>\
             <div>\
             <input type="text" v-model="parentMsg">\
             <child :child-msg="parentMsg"></child>\
             </div>\
  </div>',
  components: {
    child: child
  }
});

var child1 = Vue.extend({
  props: ['temp'],
  template: '<div>This is child: <input type="text" v-model="temp"></div>'
});

var parent1 = Vue.extend({
  data: function() {
    return {
      age: 20
    };
  },
  template: '<div>This is parent: <input type="text" v-model="age"></div>\
            <child :temp="age"></child>\
            <child :temp.sync="age"></child>\
            <child :temp.once="age"></child>',
  components: {
    child: child1
  }
});

var componentValidate = Vue.extend({
  props:{
    // null 表示可以是任何值
    propA: Number,
    // 多种值可以使用数组
    propM: [String, Number],
    // 属性必须的情况
    propB: {
      type: String,
      required: true,
      // 默认值
      default: 'hello'
    },
    // 对象或者数组的默认值应当有一个函数返回
    propD: {
      type: Object,
      default: function() {
        return {
          msg: 'Hello, World!'
        }
      }
    },
    propF: {
      // 声明双向绑定
      twoWay: true
    },
    propG: {
      // 自定义验证函数
      validator: function(value) {
        return value > 10;
      }
    },
    propH: {
      // 强制类型转换
      coerce: function(val) {
        return val + '';
      }
    },
    propC: {
      type: 'String'
    }
  },
  template: '<ul>\
              <li>1</li>\
              <li>2</li>\
              <li>3</li>\
              <li>4</li>\
              <li>5</li>\
              <li>6</li>\
            <ul>'
});
 var child2 = Vue.extend({
  template: '#child-template',
  data: function () {
    return { msg: 'hello' }
  },
  methods: {
    notify: function () {
      if (this.msg.trim()) {
        this.$dispatch('child-msg', this.msg)
        this.msg = ''
      }
    }
  }
});

Vue.component('child2', child2);

Vue.component('component-validate', componentValidate);

Vue.component('parent1', parent1);
Vue.component('my-component-one', myComponentOne);
Vue.component('parent', parent);


var vm = new Vue({
  el: '#app',
  data: {
    messages: []
  },
  // 在创建实例时 `events` 选项简单地调用 `$on`
  events: {
    'child-msg': function (msg) {
      // 事件回调内的 `this` 自动绑定到注册它的实例上
      this.messages.push(msg)
    }
  }
});
