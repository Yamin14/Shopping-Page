
import {createStore} from 'redux';
import {actions} from './actions';

const initialState = [];

const reducer = (state=initialState, action) => {
	switch (action.type) {

		//add new item
		case actions[0]:
			const newState = [...state, {
				id: action.payLoad.id,
				title: action.payLoad.title,
				image: action.payLoad.image,
				num: 1
			}];
			return newState;

		//delete item
		case actions[1]:
			return state.filter(item => item.id !== action.payLoad);

		//increment item
		case actions[2]:
			return state.map((item) => {
				if (item.id === action.payLoad)
					return {...item, num: ++item.num};
				return item;
			});

		//decrement item
		case actions[3]:
			return state.map((item) => {

				//minus by 1
				if (item.id === action.payLoad && item.num > 0)
					return {...item, num: --item.num};

				//return other items as is
				return item;
			});

		default:
			return state;
	}
}

export const store = createStore(reducer);
