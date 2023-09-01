
export function ContactInfo () {

	let contactBtns = ["Email", "Facebook", "Instagram"];

	contactBtns = contactBtns.map((contactBtn, index) => {
		return ( 
			<button key={index} className='contactBtn btn text-light'>
				{contactBtn}
			</button>)
	})

	return (
		<div className='contactInfo'>
			{contactBtns}
		</div>
	);

}