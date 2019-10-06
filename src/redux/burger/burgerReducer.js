import BurgerActionTypes from './burgerTypes';
import {
	addIngredient,
	removeIngredient,
	addToComp,
	removeFromComp,
	calculateTotal
} from './burgerUtils';

const INITIAL_STATE = {
	allIngredients: [],
	ingredients: [],
	burgerComp: [],
	totalPrice: 0,
	isFetching: false,
	errorMsg: undefined
};

const burgerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BurgerActionTypes.FETCH_INGREDIENTS_START:
			return {
				...state,
				isFetching: true
			};

		case BurgerActionTypes.FETCH_INGREDIENTS_SUCCESS:
			return {
				...state,
				isFetching: false,
				allIngredients: action.payload
			};

		case BurgerActionTypes.FETCH_INGREDIENTS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMsg: action.payload
			};

		case BurgerActionTypes.ADD_INGREDIENT:
			return {
				...state,
				ingredients: addIngredient(
					state.allIngredients,
					state.ingredients,
					action.payload
				),
				burgerComp: addToComp(state.burgerComp, action.payload),
				totalPrice: calculateTotal(
					state.allIngredients,
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
					state.allIngredients,
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
