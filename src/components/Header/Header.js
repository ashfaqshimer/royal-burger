import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './Header.scss';

const Header = () => {
	return (
		<Navbar className='Header' expand='lg'>
			<Navbar.Brand href='#home'>Royal Burger</Navbar.Brand>
			<Navbar.Toggle aria-controls='navbar-nav' />
			<Navbar.Collapse id='navbar-nav'>
				<Nav className='links ml-auto'>
					<Nav.Link href='#home' active>
						Home
					</Nav.Link>
					<Nav.Link href='#link'>Checkout</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
