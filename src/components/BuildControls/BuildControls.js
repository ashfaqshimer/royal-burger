import React from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';

import './BuildControls.scss';
import BuildControl from '../BuildControl/BuildControl';
import INGREDIENTS from '../../redux/burger/burgerIngredients';
import Button from 'react-bootstrap/Button';

const controlLabels = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
];

const BuildControls = ({ totalPrice }) => {
	return (
		<div className='BuildControls'>
			<h3 className='text-center'>Choose Your Ingredients</h3>
			<div className='controls'>
				{controlLabels.map((label) => {
					return (
						<BuildControl
							key={uuid()}
							label={label.label}
							type={label.type}
						/>
					);
				})}
			</div>
			<div className='checkout-section'>
				<p>
					Total: <strong>Rs.{totalPrice}</strong>{' '}
				</p>
				<Button
					className='checkout-button'
					variant='success'
					size='lg'
					disabled={totalPrice === 0}
				>
					Checkout
				</Button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	totalPrice: state.burger.totalPrice
});

export default connect(mapStateToProps)(BuildControls);
