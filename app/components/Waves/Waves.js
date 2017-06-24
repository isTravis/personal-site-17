import React from 'react';
import Helmet from 'react-helmet';

const Waves = function() {
	return (
		<div className={'page'}>
			<Helmet>
				<title>Waves</title>
			</Helmet>

			<h1>Waves</h1>
			<img width={'150px'} src={'/images/waves.png'} alt={'Waves'} />
		</div>
	);
};

export default Waves;
