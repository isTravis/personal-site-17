import React from 'react';
import Helmet from 'react-helmet';

const About = function() {
	return (
		<div className={'page container'}>
			<Helmet>
				<title>About · Travis Rich</title>
			</Helmet>

			<div className={'row'}>
				<div className={'col-12'}>
					<div className={'heavy color0'}>About</div>
					<p>Some content</p>
				</div>	
			</div>
			
		</div>
	);
};

export default About;
