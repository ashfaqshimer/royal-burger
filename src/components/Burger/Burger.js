import React from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';

import './Burger.scss';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const Burger = ({ burgerComp, allIngredients }) => {
	const burger = burgerComp.map((ingredient) => {
		return allIngredients[ingredient];
	});

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
	burgerComp: state.burger.burgerComp,
	allIngredients: state.burger.allIngredients
});

export default connect(mapStateToProps)(Burger);
