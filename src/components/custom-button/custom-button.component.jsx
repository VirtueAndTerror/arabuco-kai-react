import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, restOfProps }) => (
	<button className='custom-button' {...restOfProps}>
		{children}
	</button>
);

export default CustomButton;
