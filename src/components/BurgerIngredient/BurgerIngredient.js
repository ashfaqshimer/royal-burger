import React from 'react';
import PropTypes from 'prop-types';

import './BurgerIngredient.scss';

const BurgerIngredient = ({ type, styleName }) => {
	return (
		<>
			{styleName === 'BreadTop' ? (
				<div className='BurgerIngredient BreadTop'>
					<div className='Seeds1' />
					<div className='Seeds2' />
					<div />
				</div>
			) : (
				<div className={`BurgerIngredient ${styleName}`}></div>
			)}
		</>
	);
};

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default BurgerIngredient;
