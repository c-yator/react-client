import React from 'react';
import PageTitle from '../partials/PageTitle';

function Error() {
	return (
		<div className="d-flex justify-content-center align-items-center">
			<PageTitle name={'Error'} />
			<div>404 Not found</div>
		</div>
	);
}

export default Error;
