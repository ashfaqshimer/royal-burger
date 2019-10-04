import React from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';

import {
	addIngredient,
	removeIngredient
} from '../../redux/burger/burgerActions';

import './BuildControl.scss';

const BuildControl = ({
	ingredients,
	label,
	type,
	addIngredient,
	removeIngredient
}) => {
	const isDisabled = () => {
		const ingredientExists = ingredients.find(
			(ingredient) => ingredient.type === type
		);
		if (!ingredientExists) {
			return true;
		}
		return false;
	};

	return (
		<div className='BuildControl'>
			<p className='label'>{label}</p>
			<Button
				onClick={() => removeIngredient(type)}
				variant='dark'
				disabled={isDisabled()}
			>
				Less
			</Button>
			<Button onClick={() => addIngredient(type)} variant='info'>
				More
			</Button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	ingredients: state.burger.ingredients
});

const mapDispatchToProps = (dispatch) => ({
	addIngredient: (type) => dispatch(addIngredient(type)),
	removeIngredient: (type) => dispatch(removeIngredient(type))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BuildControl);
