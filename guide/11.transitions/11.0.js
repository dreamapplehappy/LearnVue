Vue.transition('stagger', {
  stagger: function(index) {
    // 每个过渡项目增加 50ms 延时
    // 但是最大延时限制为 300ms
    return Math.min(300, index * 50)
  }
})
Vue.transition('fade', {
  css: false,
  enter: function(el, done) {
    $(el)
      .css('opacity', 0)
      .animate({
        opacity: 1
      }, 1000, done)
  },
  enterCancelled(el) {
    $(el).stop();
  },
  leave: function(el, done) {
    $(el).animate({
      opacity: 0
    }, 1000, done)
  },
  leaveCancelled(el) {
    $(el).stop();
  }
});
// 自定义过度类名
Vue.transition('bounce', {
  enterClass: 'bounceInLeft',
  leaveClass: 'bounceOutRight'
});

// 使用JavaScript函数钩子
Vue.transition('demo1', {
  beforeEnter: function(el) {
    el.textContent = 'beforeEnter';
    console.log('beforeEnter');
  },
  enter: function(el) {
    el.textContent = 'enter'
  },
  afterEnter: function(el) {
    el.textContent = 'afterEnter'
  },
  enterCancelled: function(el) {
    // handle cancellation
  },

  beforeLeave: function(el) {
    el.textContent = 'beforeLeave'
  },
  leave: function(el) {
    el.textContent = 'leave'
  },
  afterLeave: function(el) {
    el.textContent = 'afterLeave'
  },
  leaveCancelled: function(el) {
    // handle cancellation
  }
});

var vm = new Vue({
  el: '#app',
  data: {
    show: true,
    demoShow: true,
    demo1Show: true,
    bounceShow: true,
    fadeShow: true,
    query: '',
    items: [{
      name: 'hello0'
    }, {
      name: 'hello1'
    }, {
      name: 'hello2'
    }, {
      name: 'hello3'
    }, {
      name: 'hello4'
    }, {
      name: 'hello5'
    }]
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    },
    demoClick: function() {
      this.demoShow = !this.demoShow;
    },
    demo1Click: function() {
      this.demo1Show = !this.demo1Show;
    },
    bounceClick: function() {
      this.bounceShow = !this.bounceShow;
    },
    fadeClick: function() {
      this.fadeShow = !this.fadeShow
    }
  }
});
