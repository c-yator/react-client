import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { removeFromFavorites } from '../../redux/actions/favoritesActions';
import { CLEAR_FAVORITES } from '../../redux/types';

function Favorites() {
	const { favorites } = useSelector((state) => state.favoritesState);
	const dispatch = useDispatch();

	return (
		<div className="container py-3">
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
						</li>
					</ul>
				))}
			</div>
		</div>
	);
}

export default Favorites;
