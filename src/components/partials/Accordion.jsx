import React, { useState } from 'react';
import { Card, CardHeader, Button } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import Collapse from 'reactstrap/lib/Collapse';

function Accordion({ title, children, defaultOpenState }) {
	const [isOpen, setIsOpen] = useState(defaultOpenState);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Card>
			<CardHeader id="headingOne">
				<Button color="link" onClick={toggle}>
					{title}
				</Button>
			</CardHeader>
			<Collapse isOpen={isOpen}>
				<CardBody>{children}</CardBody>
			</Collapse>
		</Card>
	);
}

export default Accordion;
