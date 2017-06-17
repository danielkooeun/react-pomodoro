import React from 'react';
import ClockControl from '../buttons/ClockControl';
import * as def from '../Definitions';
import TimeChange from '../buttons/TimeChange';

class Home extends React.Component {
	constructor(props) {
		super(props);


		// Four states:
		// workTime , workStop, breakTime, breakStop

		this.state = {
			status: def.workStop,
			mode: def.workMode,
			time: 1500
		}
	}

	componentDidMount() {
		var interval = setInterval(this.workTimeTick, 1000);
		this.setState({interval});
	}

	componentWillUnmount() {
		clearInterval(this.state.interval);
	}

	workTimeTick = () => {
		if (this.state.time > 0 && (this.state.status === def.workTime || this.state.status === def.breakTime))
			this.setState({
				time: this.state.time - 1
			});

		if (this.state.time === 0)
			this.changeStatus();
	}

	breakTimeTick = () => {
		if (this.state.time > 0 && this.state.status === def.breakStop)
			this.setState({
				time: this.state.time - 1
			});
		if (this.state.time === 0)
			this.setState({
				status: def.breakStop
			});
	}

	changeStatus = () => {
		if (this.state.mode === def.workMode)
			this.setState({
				status: def.breakTime,
				mode: def.breakMode,
				time: 300
			});
		else
			this.setState({
				status: def.workTime,
				mode: def.workMode,
				time: 1500
			});
	}

	clockStartStop = () => {
		if (this.state.status === def.workStop || this.state.status === def.breakStop)
			this.setState({
				status: this.state.mode + 'Time'
			});
		else
			this.setState({
				status: this.state.mode + 'Stop'
			})
	}

	timeDisplay = () => {
		const minute = Math.floor(this.state.time / 60);
		const second = (this.state.time % 60) < 10 ? '0' + (this.state.time % 60) : (this.state.time % 60);
		return (minute + ' : ' + second);
	}

	// function used to manage time change
	handleChange = (event) => {
		if (this.state.status === def.workTime || this.state.status === def.breakTime)
			this.clockStartStop();
		this.setState({
			time: event.target.value
		})
	}

	render() {
		const time = this.timeDisplay();
		return (
			<div className='jumbotron'>

				{(this.state.mode === def.workMode) && <h1 className='workTimer'>{time}</h1>}
				{(this.state.mode === def.breakMode) && <h1 className='breakTimer'>{time}</h1>}

				<TimeChange
					className='time-change-btn'
					value={this.state.time}
					onChange={this.handleChange} />

				<ClockControl
					status={this.state.status}
					mode={this.state.mode}
					clockStartStop={this.clockStartStop}
					changeStatus={this.changeStatus} />
			</div>
		)
	}
}

export default Home;