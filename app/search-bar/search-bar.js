'use strict';

angular.module('myApp.home').directive('searchBar', () => ({
  restrict: 'E',
  scope: {
    onSearch: '&',
  },
  bindToController: true,
  controller: searchBarCtrl,
  controllerAs: '$ctrl',
  templateUrl: 'search-bar/search-bar.html',
}));

function searchBarCtrl() {
  var ctrl = this;

  ctrl.searchTerm = '';

  ctrl.doSearch = function () {
    ctrl.onSearch({ searchTerm: ctrl.searchTerm });
  };
}
