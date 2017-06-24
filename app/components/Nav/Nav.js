import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = function() {
	return (
		<nav className={'navbar container'}>
			<div className={'row'}>
				<div className={'col-12'}>
					<div className={'logo'}>Travis<br />Rich</div>
					<div className={'nav-links'}>
						<Link className={'nav-link'} to={'/about'}>About</Link>
					</div>
				</div>
			</div>

		</nav>
	);
};

export default NavBar;
