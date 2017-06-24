import React from 'react';
import Helmet from 'react-helmet';

const About = function() {
	return (
		<div className={'page'}>
			<Helmet>
				<title>About · Travis Rich</title>
			</Helmet>

			<h1>About</h1>
			<p>Some content</p>
		</div>
	);
};

export default About;
