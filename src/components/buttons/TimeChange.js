import React from 'react';

// takes in props:
// .value = this.state.time
// .onChange = this.handleChange

const TimeChange = (props) => {
	return (
		<form>
			<input
				className='form-control'
				type='number'
				value={props.value}
				onChange={props.onChange}
				name='time' />
		</form>
	);
};

export default TimeChange;