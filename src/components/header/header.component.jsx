import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/sun.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
	<nav className='nav'>
		<div className='brand'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<h1 className='brand__heading'>Arabuco Kai</h1>
		</div>
		<div className='nav-links'>
			{currentUser ? (
				<div className='nav__user'>{`Logged in as ${currentUser.displayName}`}</div>
			) : null}
			<Link className='nav__link' to='/shop'>
				Shop
			</Link>
			<Link className='nav__link' to='/shop'>
				Contact
			</Link>

			{currentUser ? (
				<div className='nav__link' onClick={() => auth.signOut()}>
					Sign Out
				</div>
			) : (
				<Link className='nav__link' to='/signin'>
					Sign In
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</nav>
);

// 'state' hear is the top-level root-reducer
// We want to set 'currentUser' to the user property fo the root-reducer.
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapStateToProps)(Header);
