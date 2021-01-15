angular.module('myApp.home').component('filmsSearchResult', {
  templateUrl: 'search-result/films/films-result.html',
  controller: filmsResultCtrl,
  bindings: {
    film: '<',
  },
});

function filmsResultCtrl() {}
