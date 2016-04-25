var data = {
  msgAfterHandle: 'ui',
  message: 'Hello,World!'
};
var vm = new Vue({
  el: '#app',
  data: data, // 注意，只有这样写才是可以被代理的
  methods: {
    handleMsg() {
      this.msgAfterHandle = this.message + 'afterHandle';
    }
  },
  created: function() {
    console.log('this vue 示例已经被创建成功,这时我们可以将这个组件挂载到一个元素上。');
  },
  beforeCompile: function() {
    console.log('在实例编译之前可以做一些事情。');
  },
  compiled: function() {
    console.log('示例成功编译之后可以做一些事情。');
  },
  ready: function() {
    console.log('实例已经准备就绪。');
  },
  beforeDestroy: function() {
    console.log('实例在销毁之前可以做一些事情。');
  },
  destroyed: function() {
    console.log('实例被销毁之后可以做的一些事情！');
  }
});

console.log(vm.message === data.message, 'vm.data === data');

// 示例暴露的一些方法和属性
console.log(vm.$data, 'vm.$data');
console.log(vm.$el, 'vm.$el');
console.log(vm.$watch, 'vm.$watch');

setTimeout(function() {
  vm.$destroy();
}, 2000);
