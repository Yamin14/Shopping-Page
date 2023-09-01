
import {nanoid} from '@reduxjs/toolkit';
import {Item} from './Item';

export function Items (props) {

	let items = props.books.items;
	const searchText = props.searchText;

	items = items.map((item, index) => {

		//search book title
		const title = item.volumeInfo.title.toLowerCase();
		if (!title.includes(searchText.toLowerCase()))
			return null;

		//categorize
		if (item.volumeInfo.categories == props.selectedCategory) {
			return <Item key={nanoid()} item={item} />;

		} else if (props.selectedCategory == "All") {
			return <Item key={nanoid()} item={item} />;

		} else if (props.selectedCategory == "Uncategorised" && item.volumeInfo.categories == undefined) {
			return <Item key={nanoid()} item={item} />;
		}

	});

	items = items.filter(item => item != null);

	if (items.length === 0)
		return <h1 className='text-center'>No Items Found</h1>
	return items;
}