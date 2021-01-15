angular.module('myApp.home').component('planetsSearchResult', {
  templateUrl: 'search-result/planets/planets-result.html',
  controller: planetsResultCtrl,
  bindings: {
    planet: '<',
  },
});

function planetsResultCtrl() {}
