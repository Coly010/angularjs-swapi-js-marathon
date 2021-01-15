angular.module('myApp.home').component('starshipsSearchResult', {
  templateUrl: 'search-result/starships/starships-result.html',
  controller: starshipsResultCtrl,
  bindings: {
    starship: '<',
  },
});

function starshipsResultCtrl() {}
