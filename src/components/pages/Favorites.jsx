import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Card, Row, Col, Media, CardBody } from 'reactstrap';
import { removeFromFavorites } from '../../redux/actions/favoritesActions';
import { addToCart } from '../../redux/actions/cartActions';
import { CLEAR_FAVORITES } from '../../redux/types';
import PageTitle from '../partials/PageTitle';
import { getImage } from './../../config/getImage';

function Favorites() {
	const { favorites } = useSelector((state) => state.favoritesState);
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<>
			<Row>
				<Col>
					<span>
						<PageTitle name="Favorites" badge={favorites.length} />
					</span>
				</Col>
				{favorites.length > 0 && (
					<Col>
						<Button
							outline
							color="primary"
							className="float-right"
							onClick={() => dispatch({ type: CLEAR_FAVORITES })}
						>
							Clear Favorites
						</Button>
					</Col>
				)}
			</Row>
			{favorites.length > 0 ? (
				<Card>
					<CardBody className="pt-0">
						{favorites.map(
							({ id, name, price, priceType, quantity, image }) => (
								<Card key={id} className="my-3">
									<Row key={id} className="p-2">
										<Col md="7">
											<div className="d-flex">
												<Media
													style={{ maxHeight: '80px' }}
													object
													src={getImage(image)}
													alt="Product image"
													className="mr-2"
												/>
												<div>
													<p className="m-0 text-capitalize">{name}</p>
													<br />
													<small>{`Price: KES.${price} ${priceType}`}</small>
												</div>
											</div>
										</Col>

										<Col md="5" className="py-2">
											<div className="d-flex flex-wrap-reverse justify-content-between">
												<Button
													color="link"
													onClick={() => dispatch(removeFromFavorites(id))}
												>
													Remove
												</Button>
												<Button
													color="primary"
													onClick={() => {
														dispatch(
															addToCart({
																id,
																name,
																price,
																priceType,
																quantity,
															})
														);
														history.push('/cart');
													}}
												>
													Buy now
												</Button>
											</div>
										</Col>
									</Row>
								</Card>
							)
						)}
					</CardBody>
				</Card>
			) : (
				<div>You dont have any favorites</div>
			)}
		</>
	);
}

export default Favorites;
