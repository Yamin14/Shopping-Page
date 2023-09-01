
import cart_icon from './cart_icon.png';
import {useState, useEffect} from 'react';
import {store} from '../app/store';
import {nanoid} from '@reduxjs/toolkit';

export function Item (props) {

	const id = props.item.id;
	const item = props.item.volumeInfo;

	const [readMore, setReadMore] = useState(false);
	const [inCart, setInCart] = useState(false);

	//check if in cart every time it renders
	useEffect(() => {
		store.getState().map((storeItem) => {
			if (id === storeItem.id)
				setInCart(true);
		});
	}, []);

	//read more function
	const handleReadMore = () => {
		setReadMore(!readMore);
	}

	//add item
	const handleAddItem = () => {

		if (!inCart) {
			store.dispatch({
				type: "ADD_ITEM",
				payLoad: {
					title: item.title,
					image: item.imageLinks.thumbnail,
					id
				}
			});

			setInCart(true);
		}
	}

	//return
	return (
		<div className='item pb-0'>
		
			<div className='img_title'>
				<img src={item.imageLinks.thumbnail}/>
				<h5 className='px-2 pt-1'>{item.title}</h5>
			</div>

			<p><b>Authors:</b> {item.authors.join(", ")}</p>
			<p className='mb-0'>
				{readMore
					? item.description
					: item.description? `${item.description.substring(0, 200)} ...` : null}

					&nbsp;

					{item.description
						? 	<button className='btn text-primary' onClick={handleReadMore}>
								{readMore
									? "read less"
									: "read more"}
							</button>
				: null}
			</p>

			<div className='addToCartDiv mb-2'>
				<button className='addToCartBtn btn btn-primary' onClick={() => handleAddItem()}>
					{inCart
						? "Added To Cart"
						: "Add To Cart"
					}
					<img src={cart_icon} />
				</button>
			</div>
		</div>
	);

}