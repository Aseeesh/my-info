import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import PagesMetaHead from '../PagesMetaHead';
import React from 'react';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<PagesMetaHead description={undefined} />
			<AppHeader />
			<div>{children}</div>
			<AppFooter />
		</>
	);
};

export default DefaultLayout;
