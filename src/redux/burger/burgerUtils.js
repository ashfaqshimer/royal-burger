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

	if (existingIngredient && existingIngredient.qty === 1) {
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

export const addToComp = (burgerComp, ingredientToAdd) => {
	return [...burgerComp, ingredientToAdd];
};

export const removeFromComp = (burgerComp, ingredientToRemove) => {
	const index = burgerComp.indexOf(ingredientToRemove);

	if (index !== -1) {
		const newComp = [...burgerComp];
		newComp.splice(index, 1);
		return newComp;
	}

	return burgerComp;
};

export const calculateTotal = (currentTotal, operator, ingredientToAdd) => {
	if (operator === 'add') {
		return currentTotal + INGREDIENTS[ingredientToAdd].price;
	}

	if (operator === 'remove') {
		return currentTotal - INGREDIENTS[ingredientToAdd].price;
	}
};
