module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"plugins": [
		"react"
	],
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"react-app",
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"parser": "babel-eslint",
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		],
	},
	"settings": {
		"react": {
			"version": "999.999.999",
		},
	}
};