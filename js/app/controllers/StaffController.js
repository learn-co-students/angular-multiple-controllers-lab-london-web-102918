function StaffController() {
  let vm = this;

  vm.name = '';
  vm.email = '';
  vm.phone = '';

}

angular
  .module('app')
  .controller('StaffController', StaffController)
