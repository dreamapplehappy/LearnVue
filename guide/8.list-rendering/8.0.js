var vm = new Vue({
  el: '#app',
  data: {
    msg: '',
    parentMsg: 'parent',
    items: [{
      msg: 'hello1'
    }, {
      msg: 'hello2'
    }, {
      msg: 'hello3'
    }, {
      msg: 'hello4'
    }]
  },
  methods: {
    pop: function() {

    },
    shift: function() {

    },
    push: function() {
      this.items.push({
        msg: this.msg
      });
    },
    unshift: function() {
      this.items.unshift({
        msg: this.msg
      });
    },
    sort: function() {

    },
    splice: function() {

    },
    reverse: function() {

    }
  }
});
