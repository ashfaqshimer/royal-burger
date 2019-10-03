import React from 'react';
import uuid from 'uuid/v4';

import './Burger.scss';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import { connect } from 'react-redux';
import Ingredients from '../../redux/burger/burgerIngredients';

const Burger = ({ ingredients }) => {
	console.log(Ingredients);
	return (
		<div className='Burger'>
			<BurgerIngredient type='breadTop' styleName='BreadTop' />
			{ingredients.map(({ type, styleName }) => (
				<BurgerIngredient
					key={uuid()}
					type={type}
					styleName={styleName}
				/>
			))}
			<BurgerIngredient type='breadTop' styleName='BreadBottom' />
		</div>
	);
};

const mapStateToProps = (state) => ({
	ingredients: state.burger.ingredients
});

export default connect(mapStateToProps)(Burger);
