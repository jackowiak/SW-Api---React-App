import {
	PAGES_LIMIT,
	HOST,
	SPECIES,
} from '../helpers/variables';

export const api = {
	getData: (currentPage) => `${HOST}/characters?_page=${currentPage}&_limit=${PAGES_LIMIT}`,
	search: (phrase) => `${HOST}/characters?q=${phrase}`,
	fetchSpecies: () => `${HOST}/${SPECIES}`,
	submitCharacter: () => `${HOST}/characters`,
};