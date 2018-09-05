import axios from 'axios';

class SWAPIWrapper {
  constructor() {
    this.request = axios.create();
    this.baseUrl = 'https://swapi.co/api/';
  }

  getFilms(id) {
    return this.request
      .get(this._films(id))
      .then(response => response.data)
      .then(response => (id ? response : response.results));
  }
  getPeople(id) {
    return this.request
      .get(this._people(id))
      .then(response => response.data)
      .then(response => (id ? response : response.results));
  }

  searchPeople(query) {
    return this.request
      .get(`https://swapi.co/api/people/?search=${query}`)
      .then(response => response.data)
      .then(response => response.results);
  }

  getPlanets(id) {
    return this.request
      .get(this._planets(id))
      .then(response => response.data)
      .then(response => (id ? response : response.results));
  }

  searchPlanets(query) {
    return this.request
      .get(`https://swapi.co/api/planets/?search=${query}`)
      .then(response => response.data)
      .then(response => response.results);
  }

  getSpecies(id) {
    return this.request
      .get(this._species(id))
      .then(response => response.data)
      .then(response => (id ? response : response.results));
  }

  searchSpecies(query) {
    return this.request
      .get(`https://swapi.co/api/species/?search=${query}`)
      .then(response => response.data)
      .then(response => response.results);
  }

  getStarShips(id) {
    return this.request
      .get(this._starships(id))
      .then(response => response.data)
      .then(response => (id ? response : response.results));
  }

  searchStarships(query) {
    return this.request
      .get(`https://swapi.co/api/starships/?search=${query}`)
      .then(response => response.data)
      .then(response => response.results);
  }

  getVehicles(id) {
    return this.request
      .get(this._vehicles(id))
      .then(response => response.data)
      .then(response => (id ? response : response.results));
  }

  searchVehicles(query) {
    return this.request
      .get(`https://swapi.co/api/vehicles/?search=${query}`)
      .then(response => response.data)
      .then(response => response.results);
  }

  _films(id) {
    return id ? `${this.baseUrl}films/${id}/` : `${this.baseUrl}films/`;
  }

  _people(id) {
    return id ? `${this.baseUrl}people/${id}/` : `${this.baseUrl}people/`;
  }

  _planets(id) {
    return id ? `${this.baseUrl}planets/${id}/` : `${this.baseUrl}planets/`;
  }

  _species(id) {
    return id ? `${this.baseUrl}species/${id}/` : `${this.baseUrl}species/`;
  }

  _starships(id) {
    return id ? `${this.baseUrl}starships/${id}/` : `${this.baseUrl}starships/`;
  }

  _vehicles(id) {
    return id ? `${this.baseUrl}vehicles/${id}/` : `${this.baseUrl}vehicles/`;
  }
}

export default SWAPIWrapper;
