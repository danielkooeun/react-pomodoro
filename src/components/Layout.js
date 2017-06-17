import React from 'react';
import {NavLink} from 'react-router-dom';

class Layout extends React.Component {
	render() {
		return (
			<nav>
				<NavLink exact to='/' className='navlink' activeClassName='navlink-active'>App</NavLink>
				{" | "}
				<NavLink to='/home' className='navlink' activeClassName='navlink-active'>Home</NavLink>
			</nav>
		);
	}
}

export default Layout;