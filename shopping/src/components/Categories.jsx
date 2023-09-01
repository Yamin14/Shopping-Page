
import {Category} from './Category';
import {nanoid} from "@reduxjs/toolkit";

export function Categories (props) {

	let categories = [];

	//add categories
	props.books.items.forEach((book) => {

		let category = book.volumeInfo.categories;

		if (category !== undefined) {

			if (!categories.includes(category[0])) {
				categories.push(category[0]);
			}

		} else {
			categories.push("Uncategorised");
		}

	});

	//all category and sort
	categories.sort();
	categories.unshift("All");

	//each category
	categories = categories.map((category, index) => {
		return <Category category={category} key={nanoid()} selectedCategory={props.selectedCategory} setSelectedCategory={props.setSelectedCategory}/>;
	});

	return (
		<div className='text-center'>
			{categories}
		</div>
	);
}