export interface Species {
	name?: string;
	url?: string;
}

export interface Ability {
	ability?: Species;
	is_hidden?: boolean;
	slot?: number;
}

export interface GameIndex {
	game_index?: number;
	version?: Species;
}

export interface VersionDetail {
	rarity?: number;
	version?: Species;
}

export interface HeldItem {
	item?: Species;
	version_details?: VersionDetail[];
}

export interface VersionGroupDetail {
	level_learned_at?: number;
	move_learn_method?: Species;
	version_group?: Species;
}

export interface Move {
	move?: Species;
	version_group_details?: VersionGroupDetail[];
}

export interface RedBlue {
	back_default?: string;
	back_gray?: string;
	back_transparent?: string;
	front_default?: string;
	front_gray?: string;
	front_transparent?: string;
}

export interface GenerationI {
	'red-blue'?: RedBlue;
	yellow?: RedBlue;
}

export interface Crystal {
	back_default?: string;
	back_shiny?: string;
	back_shiny_transparent?: string;
	back_transparent?: string;
	front_default?: string;
	front_shiny?: string;
	front_shiny_transparent?: string;
	front_transparent?: string;
}

export interface Gold {
	back_default?: string;
	back_shiny?: string;
	front_default?: string;
	front_shiny?: string;
	front_transparent?: string;
}

export interface Emerald {
	front_default?: string;
	front_shiny?: string;
}

export interface GenerationIi {
	crystal?: Crystal;
	gold?: Gold;
	silver?: Gold;
}

export interface GenerationIii {
	emerald?: Emerald;
	'firered-leafgreen'?: Gold;
	'ruby-sapphire'?: Gold;
}

export interface Home {
	front_default?: string;
	front_female?: string;
	front_shiny?: string;
	front_shiny_female?: string;
}

export interface DreamWorld {
	front_default?: string;
	front_female?: null | string;
}

export interface GenerationVii {
	icons?: DreamWorld;
	'ultra-sun-ultra-moon'?: Home;
}

export interface GenerationViii {
	icons?: DreamWorld;
}

export interface OfficialArtwork {
	front_default?: string;
}

export interface Other {
	dream_world?: DreamWorld;
	home?: Home;
	'official-artwork'?: OfficialArtwork;
}

export interface Sprites {
	back_default?: string;
	back_female?: string;
	back_shiny?: string;
	back_shiny_female?: string;
	front_default?: string;
	front_female?: string;
	front_shiny?: string;
	front_shiny_female?: string;
	other?: Other;
	animated?: Sprites;
}

export interface GenerationV {
	'black-white'?: Sprites;
}

export interface GenerationIv {
	'diamond-pearl'?: Sprites;
	'heartgold-soulsilver'?: Sprites;
	platinum?: Sprites;
}

export interface Stat {
	base_stat?: number;
	effort?: number;
	stat?: Species;
}

export interface Type {
	slot?: number;
	type?: Species;
}

export interface Pokemon {
	abilities?: Ability[];
	base_experience?: number;
	forms?: Species[];
	game_indices?: GameIndex[];
	height?: number;
	held_items?: HeldItem[];
	id: number;
	is_default?: boolean;
	location_area_encounters?: string;
	moves?: Move[];
	name: string;
	order?: number;
	past_types?: any[];
	species?: Species;
	sprites: Sprites;
	stats?: Stat[];
	types?: Type[];
	weight?: number;
}
