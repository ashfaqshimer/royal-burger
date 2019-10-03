import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';

import Container from 'react-bootstrap/Container';

function App({ user }) {
	return (
		<div className='App'>
			<Header />
			<Container>
				<Switch>
					<Route exact path='/' render={() => <HomePage />} />
				</Switch>
			</Container>
		</div>
	);
}

const mapStateToProps = (state) => ({
	user: state.user.isLoggedIn
});

export default connect(mapStateToProps)(App);
