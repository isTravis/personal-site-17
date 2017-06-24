import React from 'react';
import { Link } from 'react-router-dom';

const Landing = function() {
	return (
		<div id={'landing-page'}>
			<Link to={'/project/gifgif'}>
				<div className={'card'}>
					<span className={'title'}>GIFGIF</span>
					<img src={'/images/waves.png'} alt={'waves'} />
				</div>
			</Link>
		</div>
	);
};

export default Landing;
