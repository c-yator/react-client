import React from 'react';

function PageTitle({ name, badge }) {
	return (
		<div className="py-2">
			<h5 className="font-weight-bold">
				{badge ? `${name} (${badge})` : `${name}`}
			</h5>
		</div>
	);
}

export default PageTitle;
