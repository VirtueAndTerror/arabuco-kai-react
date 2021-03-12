import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_gWOXtEYcy3G5J6q7tpqyliTt';

	const onToken = token => {
		const postData = async (url = '', data = {}) => {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			return response.json();
		};

		postData('http://localhost:5000/payments', {
			amount: priceForStripe,
			token,
		})
			.then(response => {
				alert('Payment Successful');
			})
			.catch(error => {
				console.log('Payment error: ', JSON.parse(error));
				alert(
					'There was an issue with your payment. Please make sure you use the provided credit card'
				);
			});
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='Arabuco Kai'
			billingAddress
			shippingAddress
			currency='USD'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
