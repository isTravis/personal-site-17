import React from 'react';
import { Link } from 'react-router-dom';
import ContactsBar from 'components/ContactsBar/ContactsBar';
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
					{content.projects.map((project)=> {
						return (
							<div className={'project-wrapper'} key={`project-${project.slug}`} >
								<Link className={'project-title'} to={`/project/${project.slug}`}>{project.title}</Link>
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
