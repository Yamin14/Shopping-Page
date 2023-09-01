
import cart_icon from './cart_icon.png';
import { store } from '../app/store';
import {useState} from 'react';

export function CartButton (props) {

	const [length, setLength] = useState(store.getState().length);

	//whenever length updated
	store.subscribe(() => {
		setLength(store.getState().length);
	});

	return (
		<div>
			<button className='cart_icon btn border border-success rounded pb-5 mx-2' onClick={() => props.openTheCart()}>
				<img src={cart_icon} />
				<span className='text-danger'>{length}</span>
			</button>
		</div>
	);

}