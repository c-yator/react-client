import React from 'react';
import { Carousel, CarouselControl, CarouselCaption } from 'reactstrap';

function ProductSlider() {
	return (
		<Carousel>
			<CarouselControl>
				<img src='' alt='img1' />
				<img src='' alt='img2' />
			</CarouselControl>

			<CarouselCaption>caption</CarouselCaption>
		</Carousel>
	);
}

export default ProductSlider;
