import React from 'react';
import uuid from 'uuid/v4';

import './Burger.scss';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import INGREDIENTS from '../../redux/burger/burgerIngredients';
import { connect } from 'react-redux';

const Burger = ({ burgerComp }) => {
	const burger = burgerComp.map((ingredient) => {
		return INGREDIENTS[ingredient];
	});
	console.log(burger);
	return (
		<div className='Burger'>
			<BurgerIngredient type='breadTop' styleName='BreadTop' />
			{burger.length ? (
				burger.map(({ type, styleName }) => (
					<BurgerIngredient
						key={uuid()}
						type={type}
						styleName={styleName}
					/>
				))
			) : (
				<p className='empty-message'>Your burger has no ingredients!</p>
			)}
			<BurgerIngredient type='breadTop' styleName='BreadBottom' />
		</div>
	);
};

const mapStateToProps = (state) => ({
	burgerComp: state.burger.burgerComp
});

export default connect(mapStateToProps)(Burger);
