import React from 'react';
import { connect } from 'react-redux';

import './HomePage.scss';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

const HomePage = ({ ingredients, totalPrice }) => {
	return (
		<div className='HomePage'>
			<Burger />
			<p>
				Your total price is :
				<span>
					<strong>Rs. {totalPrice}</strong>
				</span>
			</p>
			<hr></hr>
			<BuildControls />
		</div>
	);
};

const mapStateToProps = (state) => ({
	ingredients: state.burger.ingredients,
	totalPrice: state.burger.totalPrice
});

export default connect(mapStateToProps)(HomePage);
