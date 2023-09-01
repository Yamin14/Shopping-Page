
export function SearchBar (props) {

	return <input className='border-2 border-dark rounded' type='text' placeholder='search books...' onChange={e => props.onChange(e.target.value)}/>;

}