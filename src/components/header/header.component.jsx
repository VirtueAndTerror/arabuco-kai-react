import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/sun.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
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
		</div>
	</nav>
);

export default Header;
