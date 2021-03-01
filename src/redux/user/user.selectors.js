import { createSelector } from 'reselect';

// INPUT SELECTORS
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
	[selectUser],
	// OUTPUT SELECTOR
	user => user.currentUser
);
