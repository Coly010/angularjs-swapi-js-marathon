angular.module('myApp.home').component('searchResult', {
  templateUrl: 'search-result/search-result.html',
  controller: searchResultCtrl,
  bindings: {
    searchData: '<',
  },
});

function searchResultCtrl() {
  var ctrl = this;

  ctrl.$onInit = function () {
    ctrl.isPerson = ctrl.searchData && ctrl.searchData.height !== undefined;
    ctrl.isFilm = ctrl.searchData && ctrl.searchData.episode_id !== undefined;
    ctrl.isPlanet =
      ctrl.searchData && ctrl.searchData.rotation_period !== undefined;
    ctrl.isSpecies =
      ctrl.searchData && ctrl.searchData.classification !== undefined;
    ctrl.isStarship =
      ctrl.searchData && ctrl.searchData.starship_class !== undefined;
    ctrl.isVehicle =
      ctrl.searchData && ctrl.searchData.vehicle_class !== undefined;
  };
}
const peopleSearchResult = {
  name: '',
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: '',
  homeworld: '',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  url: '',
};

const filmSearchResult = {
  title: '',
  episode_id: 0,
  opening_crawl: '',
  director: '',
  producer: '',
  release_date: '',
  characters: [],
  planets: [],
  starships: [],
  vehicles: [],
  species: [],
  url: '',
};

const planetSearchResult = {
  name: '',
  rotation_period: '',
  orbital_period: '',
  diameter: '',
  climate: '',
  gravity: '',
  terrain: '',
  surface_water: '',
  population: '',
  residents: [],
  films: [],
  url: '',
};

const speciesSearchResult = {
  name: '',
  classification: '',
  designation: '',
  average_height: '',
  skin_colors: '',
  hair_colors: '',
  eye_colors: '',
  average_lifespan: '',
  homeworld: null,
  language: '',
  people: [],
  films: [],
  url: '',
};

const starshipSearchResult = {
  name: '',
  model: '',
  manufacturer: '',
  cost_in_credits: '',
  length: '',
  max_atmosphering_speed: '',
  crew: '',
  passengers: '',
  cargo_capacity: '',
  consumables: '',
  hyperdrive_rating: '',
  MGLT: '',
  starship_class: '',
  pilots: [],
  films: [],
  url: '',
};

const vehicleSearchResult = {
  name: '',
  model: '',
  manufacturer: '',
  cost_in_credits: '',
  length: '',
  max_atmosphering_speed: '',
  crew: '',
  passengers: '',
  cargo_capacity: '',
  consumables: '',
  vehicle_class: '',
  pilots: [],
  films: [],
  url: '',
};
