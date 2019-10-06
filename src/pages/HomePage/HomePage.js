import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import './HomePage.scss';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import CheckoutModal from '../../components/CheckoutModal/CheckoutModal';
import { fetchIngredientsStartAsync } from '../../redux/burger/burgerActions';
import Spinner from '../../components/Spinner/Spinner';

const HomePage = ({ totalPrice, fetchIngredients, isFetching }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		fetchIngredients();
	}, [fetchIngredients]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return isFetching ? (
		<Spinner />
	) : (
		<div className='HomePage'>
			<Burger />
			<p>
				Your total price is :
				<span>
					<strong>Rs. {totalPrice}</strong>
				</span>
			</p>
			<hr></hr>
			<BuildControls />
			<div className='checkout-section'>
				<p>
					Total: <strong>Rs.{totalPrice}</strong>{' '}
				</p>
				<Button
					className='checkout-button'
					variant='success'
					size='lg'
					disabled={totalPrice === 0}
					onClick={handleShow}
				>
					Checkout
				</Button>
			</div>
			<CheckoutModal show={show} handleClose={handleClose} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	ingredients: state.burger.ingredients,
	totalPrice: state.burger.totalPrice,
	isFetching: state.burger.isFetching
});

const mapDispatchToProps = (dispatch) => ({
	fetchIngredients: () => dispatch(fetchIngredientsStartAsync())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage);
