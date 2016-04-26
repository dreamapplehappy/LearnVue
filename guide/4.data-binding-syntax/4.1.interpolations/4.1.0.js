var raw_html = '<div>Hello, World!</div>';
var id = 1;
var url = 'http://www.baidu.com';
var boolValue = true;

var vm = new Vue({
  el: '#app',
  data: {
    msg: 'Hello,World!',
    rawHtml: raw_html,
    id: id,
    url: url,
    boolValue: boolValue
  },
  methods: {
    changeMsg: function() {
      this.msg = 'change my value'
    }
  }
});
