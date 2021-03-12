const express = require('express'),
	app = express(),
	path = require('path'),
	PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.post('/payments', (req, res) => {
	const { token, amount } = req.body;
	const body = {
		source: token.id,
		amount,
		currency: 'usd',
	};

	stripe.charges.create(body, (stripeErr, stripeRes) => {
		if (stripeErr) {
			res.status(500).send({ error: stripeErr });
			console.log('Stripe Error Obj', stripeErr);
		} else {
			res.status(200).send({ success: stripeRes });
			console.log('Stripe Response Object ', stripeRes);
		}
	});
});

const server = app.listen(PORT, error => {
	if (error) throw error;
	console.log(`Server is listening on port ${PORT}`);
});

module.exports = server;
