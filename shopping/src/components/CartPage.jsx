
import {Cart} from './Cart';
//price

export function CartPage (props) {

	return (
		<div>
			<button className=' backBtn m-2 pb-2 w-25 btn btn-primary text-light' onClick={props.backButton}>Back</button>
			<Cart />
		</div>
	);
}
