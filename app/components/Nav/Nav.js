import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = function() {
	return (
		<nav className={'navbar-page'}>
			<h1 className={'logo'}>Travis<br />Rich</h1>
			<div className={'nav-links'}>
				<Link className={'nav-link'} to={'/about'}>About</Link>
			</div>

		</nav>
	);
};

export default NavBar;
