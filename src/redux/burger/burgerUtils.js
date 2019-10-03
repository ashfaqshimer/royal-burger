import INGREDIENTS from './burgerIngredients';

export const addIngredient = (ingredients, ingredientToAdd) => {
	const exisitingIngredient = ingredients.find(
		(ingredient) => ingredient.type === ingredientToAdd
	);

	if (exisitingIngredient) {
		return ingredients.map((ingredient) =>
			ingredient.type === ingredientToAdd
				? { ...ingredient, qty: ingredient.qty + 1 }
				: ingredient
		);
	}

	return [...ingredients, { ...INGREDIENTS[ingredientToAdd], qty: 1 }];
};

export const removeIngredient = (ingredients, ingredientToRemove) => {
	const existingIngredient = ingredients.find(
		(ingredient) => ingredient.type === ingredientToRemove
	);

	if (existingIngredient.qty === 1) {
		return ingredients.filter(
			(ingredient) => ingredient.type !== ingredientToRemove
		);
	}

	return ingredients.map((ingredient) =>
		ingredient.type === ingredientToRemove
			? { ...ingredient, qty: ingredient.qty - 1 }
			: ingredient
	);
};
