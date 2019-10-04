import { BurgerActionTypes } from './burgerTypes';
import {
	addIngredient,
	removeIngredient,
	addToComp,
	removeFromComp,
	calculateTotal
} from './burgerUtils';

const INITIAL_STATE = {
	ingredients: [],
	burgerComp: [],
	totalPrice: 0
};

const burgerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BurgerActionTypes.ADD_INGREDIENT:
			return {
				...state,
				ingredients: addIngredient(state.ingredients, action.payload),
				burgerComp: addToComp(state.burgerComp, action.payload),
				totalPrice: calculateTotal(
					state.totalPrice,
					'add',
					action.payload
				)
			};
		case BurgerActionTypes.REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: removeIngredient(
					state.ingredients,
					action.payload
				),
				burgerComp: removeFromComp(state.burgerComp, action.payload),
				totalPrice: calculateTotal(
					state.totalPrice,
					'remove',
					action.payload
				)
			};
		default:
			return state;
	}
};

export default burgerReducer;
