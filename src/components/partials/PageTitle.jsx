import React from 'react';

function PageTitle({ name }) {
	return (
		<div className="py-2">
			<h5 className="font-weight-bold">{name}</h5>
		</div>
	);
}

export default PageTitle;
