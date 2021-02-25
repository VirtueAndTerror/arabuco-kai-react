import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

// This destructures the State mapped to props passed by connect().
const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					toggleCartHidden();
				}}
			>
				Go to Checkout
			</CustomButton>
		</div>
	);
};

//  createStructuredSelector() will automaticlly pass the Whole State to the selectors listed in the object passed to it.
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

const connectedComponent = connect(mapStateToProps, { toggleCartHidden })(
	CartDropdown
);

export default withRouter(connectedComponent);
