import React from 'react';
import { Cart } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<Cart className='shopping-icon' />
		<span className='item-count'>0</span>
	</div>
);

export default connect(null, { toggleCartHidden })(CartIcon);
