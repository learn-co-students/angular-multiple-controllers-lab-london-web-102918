function ContactController() {
  let vm = this;

  vm.name = '';
  vm.email = '';
  vm.phone = '';

  vm.changeName = function () {
    vm.name = 'Something else indeed.'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
