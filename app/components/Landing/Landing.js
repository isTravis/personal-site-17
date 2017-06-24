import React from 'react';
import { Link } from 'react-router-dom';
import content from 'content';

const Landing = function() {
	console.log(content);
	return (
		<div className={'landing-page container'}>
			<div className={'blocks row'}>
				{content.projects.map((project)=> {
					return (
						<Link key={`project-${project.slug}`} to={`/project/${project.slug}`} className={'col-6 block'}>
							<div className={'block-content'}>
								<span>{project.title}</span>
								<img src={`/images/${project.pic}`} />
								<p>{project.description}</p>

							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Landing;
