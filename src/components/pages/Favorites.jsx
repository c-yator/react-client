import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { removeFromFavorites } from '../../redux/actions/favoritesActions';
import { addToCart } from '../../redux/actions/cartActions';
import { CLEAR_FAVORITES } from '../../redux/types';

function Favorites() {
	const { favorites } = useSelector((state) => state.favoritesState);
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<Container className="py-3">
			<h5 className="font-weight-bold">
				<span>Favorites</span>
				<Button
					color="link"
					onClick={() => dispatch({ type: CLEAR_FAVORITES })}
				>
					Clear Favorites
				</Button>
			</h5>
			<div>
				{favorites.map(({ id, name, price, priceType, quantity }) => (
					<ul key={id}>
						<li>
							{name}
							<Button
								color="link"
								onClick={() => dispatch(removeFromFavorites(id))}
							>
								Remove
							</Button>
							<Button
								color="link"
								onClick={() => {
									dispatch(addToCart({ id, name, price, priceType, quantity }));
									history.push('/cart');
								}}
							>
								Buy now
							</Button>
						</li>
					</ul>
				))}
			</div>
		</Container>
	);
}

export default Favorites;
