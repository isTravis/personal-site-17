import React from 'react';
import { Link } from 'react-router-dom';
import ContactsBar from 'components/ContactsBar';
import content from 'content';

const Landing = function() {
	console.log(content);
	return (
		<div>
			<div className={'header'}>
				<div className={'container'}>
					<h1 className={'title'}>Travis Rich</h1>
					<div className={'description'}>Building for a socially responsible internet. Open source product developer. Electrical Engineer. MIT Media Lab PhD. Peanut butter.</div>
					<ContactsBar />
				</div>
			</div>
			<div className={'content'}>
				<div className={'container'}>
					{content.projects.sort((foo, bar)=> {
						if (foo.year < bar.year) { return 1; }
						if (foo.year > bar.year) { return -1; }
						return 0;
					}).map((project)=> {
						return (
							<div className={'project-wrapper'} key={`project-${project.slug}`} >
								<div className={'project-title'}>
									<Link to={`/${project.slug}`}>{project.title}</Link>
									<span className={'year'}>{project.year}</span>
								</div>
								<div className={'project-description'}>{project.description}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Landing;
