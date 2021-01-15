angular.module('myApp.home').component('peopleSearchResult', {
  templateUrl: 'search-result/people/people-result.html',
  controller: peopleResultCtrl,
  bindings: {
    person: '<',
  },
});

function peopleResultCtrl() {}
