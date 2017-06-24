import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = function() {
	return (
		<nav className={'navbar container'}>
			<div className={'row'}>
				<div className={'col-12'}>
					<Link to={'/'} className={'logo heavy'}>Travis<br />Rich</Link>
					<div className={'nav-links'}>
						<Link className={'nav-link'} to={'/about'}>About</Link>
					</div>
				</div>
			</div>

		</nav>
	);
};

export default NavBar;
