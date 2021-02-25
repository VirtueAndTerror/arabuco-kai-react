import React from 'react';
import { Cart } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<Cart className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);

//  createStructuredSelector() will automaticlly pass the Whole State to the selectors listed in the object passed to it.
const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

// Shorthanded version of dispatch.
export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
