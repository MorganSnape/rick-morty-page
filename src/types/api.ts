type RickMortyResponse<T> = {
  info:    Info;
  results: T[];
}

export type RickMortyCharacterResponse = RickMortyResponse<Character>;

export type RickMortyLocationResponse = RickMortyResponse<Location>;

export type RickMortyEpisodeResponse = RickMortyResponse<Episode>;

export type Info = {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export type Character = {
  id:       number;
  name:     string;
  status:   Status;
  species:  Species;
  type:     string;
  gender:   Gender;
  origin:   ShortedLocation;
  location: ShortedLocation;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}

export type Location = {
  id:        number;
  name:      string;
  type:      string;
  dimension: string;
  residents: string[];
  url:       string;
  created:   Date;
}

export type Episode = {
  id:         number;
  name:       string;
  air_date:   string;
  episode:    string;
  characters: string[];
  url:        string;
  created:    Date;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export type ShortedLocation = {
  name: string;
  url:  string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "Unknown",
}
