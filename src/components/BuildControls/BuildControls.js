import React from 'react';
import uuid from 'uuid/v4';

import './BuildControls.scss';
import BuildControl from '../BuildControl/BuildControl';
import INGREDIENTS from '../../redux/burger/burgerIngredients';

const controlLabels = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
];

const BuildControls = () => {
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
		</div>
	);
};

export default BuildControls;
