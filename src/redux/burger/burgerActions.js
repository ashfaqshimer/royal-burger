import { BurgerActionTypes } from './burgerTypes';

export const addIngredient = (type) => ({
	type: BurgerActionTypes.ADD_INGREDIENT,
	payload: type
});

export const removeIngredient = (type) => ({
	type: BurgerActionTypes.REMOVE_INGREDIENT,
	payload: type
});
