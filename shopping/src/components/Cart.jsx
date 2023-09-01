
import {store} from '../app/store';
import {nanoid} from '@reduxjs/toolkit';
import {useState} from 'react';

export function Cart () {

	//delete item
	const delItem = (id) => {
		store.dispatch({
			type: "DEL_ITEM",
			payLoad: id
		});
	}

	//increment item
	const incItem = (id) => {
		store.dispatch({
			type: "INC_ITEM",
			payLoad: id
		});
	}

	//decrement item
	const decItem = (id, num) => {

		if (num === 1)
			delItem(id);
		
		store.dispatch({
			type: "DEC_ITEM",
			payLoad: id
		});
	}

	//update cart list function
	const updateFunction = () => {
		return store.getState().map((item) => {
			return (
				<div key={nanoid()} 
					className="cartItem border border-3 border-dark my-3 pb-2">

					<div className='cartItemTop'>

						<div className='imgTitle'>
						<img src={item.image}/>
						<h5 className='m-2'>{item.title}</h5>
						</div>
						
						<div className='incDecNum mx-3 pt-2'>
							<button className='incDecBtn btn btn-danger border rounded-circle h-25' onClick={() => decItem(item.id, item.num)}>-</button>
							<p className='mx-1 text-dark'>{item.num}</p>
							<button className='incDecBtn btn btn-success border rounded-circle h-25' onClick={() => incItem(item.id)}>+</button>
						</div>

					</div>

					<div className='text-center mt-2'>
						<button className='btn btn-danger' onClick={() => delItem(item.id)}>
							Remove Item
						</button>
					</div>
				</div>
			);
		})
	}

	//map each item to cart
	const [cartList, setCartList] = useState(updateFunction());

	//update cartimmediately when changed
	store.subscribe(() => {
		setCartList(updateFunction());
	});

	//return cart with items
	return (
		<div className='cart m-4'>
			{cartList}
		</div>
	);
}