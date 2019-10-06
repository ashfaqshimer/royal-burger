import BurgerActionTypes from './burgerTypes';
import { db, convertSnapshotToMap } from '../../firebaseConfig';

export const addIngredient = (type) => ({
	type: BurgerActionTypes.ADD_INGREDIENT,
	payload: type
});

export const removeIngredient = (type) => ({
	type: BurgerActionTypes.REMOVE_INGREDIENT,
	payload: type
});

export const fetchIngredientsStart = () => ({
	type: BurgerActionTypes.FETCH_INGREDIENTS_START
});

export const fetchIngredientsSuccess = (ingredients) => ({
	type: BurgerActionTypes.FETCH_INGREDIENTS_SUCCESS,
	payload: ingredients
});

export const fetchIngredientsFailure = (error) => ({
	type: BurgerActionTypes.FETCH_INGREDIENTS_FAILURE,
	payload: error
});

export const fetchIngredientsStartAsync = () => {
	return (dispatch) => {
		const ingredientsRef = db.collection('ingredients');
		dispatch(fetchIngredientsStart());

		ingredientsRef
			.get()
			.then((snapshot) => {
				const ingredientsMap = convertSnapshotToMap(snapshot);
				console.log(ingredientsMap);
				dispatch(fetchIngredientsSuccess(ingredientsMap));
			})
			.catch((error) => dispatch(fetchIngredientsFailure(error.message)));
	};
};
