import React from 'react';
import { connect } from 'react-redux';

import './HomePage.scss';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

const HomePage = ({ ingredients }) => {
	const price = ingredients.reduce((acc, curr) => {
		return (acc += curr.price);
	}, 0);

	return (
		<div className='HomePage'>
			This is the main page
			<Burger />
			<p>
				Your total price is :{' '}
				<span>
					Rs. <strong>{price}</strong>
				</span>
			</p>
			<BuildControls />
		</div>
	);
};

const mapStateToProps = (state) => ({
	ingredients: state.burger.ingredients
});

export default connect(mapStateToProps)(HomePage);
