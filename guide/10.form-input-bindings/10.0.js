var vm = new Vue({
  el: '#app',
  data: {
    number: 123,
    bindRadioValue: 123,
    checkboxTrue: 'true-checkbox',
    checkboxFalse: 'false-checkbox',
    bindCheckbox: '',
    bindRadio: '',
    multipleSelected: [],
    selected: '',
    message: '',
    checkNames: [],
    vForSelected: 'a',
    vForSelectedItems: [{
      name: 'A',
      value: 'a'
    }, {
      name: 'B',
      value: 'b'
    }, {
      name: 'C',
      value: 'c'
    }]
  }
});
