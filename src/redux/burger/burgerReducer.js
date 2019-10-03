import { BurgerActionTypes } from './burgerTypes';
import { addIngredient, removeIngredient } from './burgerUtils';

const INITIAL_STATE = {
	ingredients: []
};

const burgerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BurgerActionTypes.ADD_INGREDIENT:
			return {
				...state,
				ingredients: addIngredient(state.ingredients, action.payload)
			};
		case BurgerActionTypes.REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: removeIngredient(state.ingredients, action.payload)
			};
		default:
			return state;
	}
};

export default burgerReducer;
