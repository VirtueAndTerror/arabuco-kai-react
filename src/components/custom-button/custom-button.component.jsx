import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...restOfProps
}) => (
	<button
		className={`${inverted ? 'inverted' : ''} ${
			isGoogleSignIn ? 'google-sign-in' : ''
		} custom-button`}
		{...restOfProps}
	>
		{children}
	</button>
);

export default CustomButton;
