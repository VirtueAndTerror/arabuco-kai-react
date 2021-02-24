import React from 'react';
import { Cart } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<Cart className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);

const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state),
});

// Shorthanded version of dispatch.
export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
