import React from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';

import {
	addIngredient,
	removeIngredient
} from '../../redux/burger/burgerActions';

import './BuildControl.scss';

const BuildControl = ({ label, type, addIngredient, removeIngredient }) => {
	return (
		<div className='BuildControl'>
			<p className='label'>{label}</p>
			<Button onClick={() => removeIngredient(type)} variant='dark'>
				Less
			</Button>
			<Button onClick={() => addIngredient(type)} variant='info'>
				More
			</Button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addIngredient: (type) => dispatch(addIngredient(type)),
	removeIngredient: (type) => dispatch(removeIngredient(type))
});

export default connect(
	null,
	mapDispatchToProps
)(BuildControl);
