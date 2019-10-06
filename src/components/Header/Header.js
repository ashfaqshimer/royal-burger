import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './Header.scss';

const Header = () => {
	return (
		<Navbar className='Header' expand='lg'>
			<Link to='/'>
				<Navbar.Brand>Royal Burger</Navbar.Brand>
			</Link>

			<Navbar.Toggle aria-controls='navbar-nav' />
			<Navbar.Collapse id='navbar-nav'>
				<Nav className='links ml-auto'>
					<NavLink to='/' activeClassName='active'>
						<Nav.Link className='navlink'>Home</Nav.Link>
					</NavLink>
					<NavLink to='/checkout' activeClassName='active'>
						<Nav.Link className='navlink'>Checkout</Nav.Link>
					</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
