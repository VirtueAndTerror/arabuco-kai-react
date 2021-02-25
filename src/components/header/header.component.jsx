import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

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
// We want to set 'currentUser' to the user property of the root-reducer.
//  createStructuredSelector will autmaticlly pass the State to each of the selectors listed.
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
