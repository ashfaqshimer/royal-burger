import React, { useState } from 'react';
import { connect } from 'react-redux';

import './CheckoutModal.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CheckoutModal = ({ show, handleClose, ingredients, totalPrice }) => {
	return (
		<Modal className='CheckoutModal' show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>
					<h2>Order Confirmation</h2>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Price Breakdown:</h4>
				<ul class='list-group list-group-flush'>
					{ingredients.map((ingredient) => (
						<li class='list-group-item'>
							{ingredient.label}
							<span className='quantity'>x{ingredient.qty}</span>
						</li>
					))}
				</ul>
				<p className='total-price'>
					Your Total: <span>Rs. {totalPrice}</span>
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
				<Button variant='primary' onClick={handleClose}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

const mapStateToProps = (state) => ({
	ingredients: state.burger.ingredients,
	totalPrice: state.burger.totalPrice
});

export default connect(mapStateToProps)(CheckoutModal);
