import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/sun.svg';

import './header.styles.scss';

const Header = () => (
	<nav className='nav'>
		<Link classname='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='nav-links'>
			<Link className='nav__link' to='/shop'>
				Shop
			</Link>
			<Link className='nav__link' to='/shop'>
				Contact
			</Link>
		</div>
	</nav>
);

export default Header;
