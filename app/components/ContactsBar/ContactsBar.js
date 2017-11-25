import React from 'react';

const ContactsBar = function() {
	return (
		<div className={'contacts'}>
			<a href={'https://github.com/isTravis'}>github</a>
			<span className={'spacer'}>·</span>
			<a href={'https://twitter.com/isTravis'}>twitter</a>
			<span className={'spacer'}>·</span>
			<a href={'mailto:hello@travisrich.com'}>email</a>
		</div>
	);
};

export default ContactsBar;
