import React from 'react';

function Checkbox({ onChange, label, name, ...props }) {
	function handleOnChange(event) {
		onChange(event.target.checked === true);
	}

	return <label className={'checkbok-container ' + props.className}>
		<span className='checkbok-label'>{label}</span>
		<input name={name}
			onChange={handleOnChange}
			type='checkbox'
			{...props}
		/>
		<span className='checkmark'></span>
	</label>;
}

export default Checkbox;