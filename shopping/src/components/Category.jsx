
import {useState} from 'react';

export function Category (props) {

	const selectedCategory = props.selectedCategory;

	const normalClass = 'category btn text-light my-1 py-1 h-100 w-100 bg-dark';
	const classIfSelected = normalClass + 'selectedCategory bg-success';

	const handleClick = () => {
		props.setSelectedCategory(props.category);
	}

	return (
		<div>
			<button className={selectedCategory === props.category ? classIfSelected : normalClass} onClick={handleClick}>
				{props.category}
			</button>
		</div>
	);

}