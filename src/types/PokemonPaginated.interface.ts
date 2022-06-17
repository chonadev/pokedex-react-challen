import { URL } from "url";

export interface PokemonPaginated {
  count?:    number;
  next?:     string;
  previous?: null;
  results?:  PokemonBasic[];
}

export interface PokemonBasic {
  name?: string;
  url?:  URL;
}
