import { AxiosInstance } from 'axios';

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: any[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface Peoople {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface Films {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface Planets {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface Species {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface Vehicles {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: any[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

declare class SWAPIWrapper {
  request: AxiosInstance;
  baseUrl: string;
  getFilms(id: number): Promise<Films>;
  getFilms(): Promise<Films[]>;
  getPeople(id: number): Promise<Peoople>;
  getPeople(): Promise<Peoople[]>;
  getPlanets(id: number): Promise<Planets>;
  getPlanets(): Promise<Planets[]>;
  getSpecies(id: number): Promise<Species>;
  getSpecies(): Promise<Species[]>;
  getStarships(id: number): Promise<Starship>;
  getStarships(): Promise<Starship[]>;
  searchStarships(query: string): Promise<Starship[]>;
  getVehicles(id: number): Promise<Vehicles>;
  getVehicles(): Promise<Vehicles[]>;
}
export default SWAPIWrapper;
