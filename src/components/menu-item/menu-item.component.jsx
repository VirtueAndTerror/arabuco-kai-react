import React from 'react';
// withRouter HOC injects the 'history' 'match' and 'location' properties into the props object.
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	// Dynamicly type a CSS Class.
	// Used 'history.push()' insted of the <Link> component in order to redirect.
	<div
		className={`${size} menu-item`}
		onClick={() => history.push(`${match.url} ${linkUrl}`)}
		style={{
			backgroundImage: `url(${imageUrl})`,
		}}
	>
		<div className='content'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<span className='subtitle'>Shop Now</span>
		</div>
	</div>
);

export default withRouter(MenuItem);
