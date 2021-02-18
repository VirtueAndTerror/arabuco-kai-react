import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import Header from './components/header/header.component';

class App extends Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
