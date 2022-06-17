import { URL } from 'url';

export interface PokemonBasic {
	name?: string;
	url?: URL;
}

export interface PokemonPaginated {
	count?: number;
	next?: string;
	previous?: null;
	results?: PokemonBasic[];
}
