angular.module('myApp.home').component('vehiclesSearchResult', {
  templateUrl: 'search-result/vehicles/vehicles-result.html',
  controller: vehiclesResultCtrl,
  bindings: {
    vehicle: '<',
  },
});

function vehiclesResultCtrl() {}
