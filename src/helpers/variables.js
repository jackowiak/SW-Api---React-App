export const INPUT_NAME = 'name';
export const INPUT_SPECIES = 'species';
export const INPUT_GENDER = 'gender';
export const INPUT_HOMEWORLD = 'homeworld';
export const INVALID_FIELD_MESSAGE = 'This field is required.';
export const MESSAGE_SUBMIT = 'Add new character';
export const GENDER_OPTIONS = [
	{
		value: 'male',
		label: 'male',
	},
	{
		value: 'female',
		label: 'female',
	},
	{
		value: 'n/a',
		label: 'n/a',
	}
];

export const TABLE_COLUMS = [
	'Id', 'Name', 'Species', 'Gender', 'Homeworld', 'Actions'
];

export const options = {
	title: 'Sonalake Task',
	listView: 'List View',
};

export const NO_RESULTS_MESSAGE = 'No Results Found';

export const PAGES_LIMIT = 2;
export const HOST = 'http://localhost:3000';
export const SPECIES = 'species';
export const X_TOTAL_COUNT = 'X-Total-Count';

export const LIST_VIEW_TITLE = 'List View';
export const ADD_NEW_TITLE = 'Add new';
export const SEARCH_TITLE = 'Search';

export const OPTIONS_NEXT = 'Next';
export const OPTIONS_PREVIOUS = 'Previous';

export const buttons = [
	{ type: 'Edit', btnClassName: 'btn btn-secondary', iClassName: 'fa fa-pencil' },
	{ type: 'Remove', btnClassName: 'btn btn-danger', iClassName: 'fa fa-trash-o' },
];