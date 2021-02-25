import { createSelector } from 'reselect';

// INPUT SELECTORS
const selectUser = state => state.user;

// OUTPUT SELECTOR
export const selectCurrentUser = createSelector(
	[selectUser],
	user => user.currentUser
);
