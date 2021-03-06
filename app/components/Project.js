import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter, Link } from 'react-router-dom';
import ContactsBar from 'components/ContactsBar';
import content from 'content';

const propTypes = {
	match: PropTypes.object.isRequired,
};

const Project = function(props) {
	const match = props.match;
	const projectData = content.projects.reduce((prev, current, index)=> {
		if (current.slug === match.params.slug) {
			return { ...current, accentIndex: (index % 5) + 1 };
		}
		return prev;
	}, { title: 'Not Found' });

	return (
		<div>
			<Helmet>
				<title>{projectData.title} · Travis Rich</title>
				<meta name="description" content={projectData.description} />
			</Helmet>

			<div className={'header'}>
				<div className={'container'}>
					<h1 className={'title'}>
						<Link to={'/'}>Travis Rich</Link> / {projectData.title}
					</h1>
					<ContactsBar />
				</div>
			</div>

			<div className={'content'}>
				<div className={'container'}>
					{!projectData.html &&
						<h1>Project not found</h1>
					}
					{projectData.html &&
						<div dangerouslySetInnerHTML={{ __html: projectData.html }} />
					}
				</div>
			</div>
		</div>
	);
};

Project.propTypes = propTypes;
export default withRouter(Project);
