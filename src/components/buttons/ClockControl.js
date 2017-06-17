import React from 'react';
import * as def from '../Definitions';

// props to send:
// functions: clockStartStop, changeStatus
// state: status

const ClockControl = (props) => {
	return (
		<div>
			<button
				className='btn btn-primary'
				onClick={props.clockStartStop} >
				Start / Stop
			</button>
			{' '}
			<button
				className='btn btn-success'
				onClick={props.changeStatus} >
				{((props.status === def.workTime) || (props.status === def.workStop)) ? 'Break' : 'Work'}</button>
		</div>
	)
};

export default ClockControl;