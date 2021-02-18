import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...restOfProps }) => (
	<div className='group'>
		<input className='form-input' onChange={handleChange} {...restOfProps} />
		{label ? (
			<label
				className={`${
					restOfProps.value.lengh ? 'shrink' : ''
				} form-input-label `}
			>
				{' '}
				{label}
			</label>
		) : null}
	</div>
);

export default FormInput;
