import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

import Main from './components/Main';
import NavBar from './components/NavBar';
import AddCharacter from './components/AddCharacter';

describe('<App />', () => {
	let appWrapper;
	let appInstance;

	const app = (disableLifecycleMethods = false) =>
		shallow(<App />, { disableLifecycleMethods });

	beforeEach(() => {
		appWrapper = app();
		appInstance = appWrapper.instance();
	});

	afterEach(() => {
		appWrapper = undefined;
		appInstance = undefined;
	});

	it('renders without crashing', () => {
		expect(app().exists()).toBe(true);
	});

	it('renders a div', () => {
		expect(appWrapper.first().type()).toBe('div');
	});

	describe('the rendered div', () => {
		const div = () => appWrapper.first();

		it('contains everything else that gets rendered', () => {
			expect(div().children()).toEqual(appWrapper.children());
		});
	});

	it('renders <NavBar />', () => {
		expect(appWrapper.find(NavBar).length).toBe(1);
	});

	describe('the rendered <NavBar />', () => {
		const header = () => appWrapper.find(NavBar);

		it('receives state.isOpen as isOpen prop', () => {
			expect(header().prop('isOpen')).toEqual(appWrapper.state('isOpen'));
		});
	});
});
