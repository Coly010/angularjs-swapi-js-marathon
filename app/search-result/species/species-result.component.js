angular.module('myApp.home').component('speciesSearchResult', {
  templateUrl: 'search-result/species/species-result.html',
  controller: speciesResultCtrl,
  bindings: {
    species: '<',
  },
});

function speciesResultCtrl() {}
