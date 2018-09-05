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
declare class SWAPIWrapper {
  request: AxiosInstance;
  baseUrl: string;
  getFilms(id: number): Promise<any>;
  getFilms(): Promise<any[]>;
  getPeople(id: number): Promise<any>;
  getPeople(): Promise<any[]>;
  getPlanets(id: number): Promise<any>;
  getPlanets(): Promise<any[]>;
  getSpecies(id: number): Promise<any>;
  getSpecies(): Promise<any[]>;
  getStarships(id: number): Promise<any>;
  getStarships(): Promise<any[]>;
  searchStarships(query: string): Promise<Starship[]>;
  getVehicles(id: number): Promise<any>;
  getVehicles(): Promise<any[]>;
}
export default SWAPIWrapper;
