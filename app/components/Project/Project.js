import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
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
	}, {});

	return (
		<div className={`project-page container accent${projectData.accentIndex}`}>
			<Helmet>
				<title>{projectData.title} · Travis Rich</title>
			</Helmet>

			<div className={'row'}>
				<div className={'col-12 project-title'}>
					<div className={'heavy'}>{projectData.title}</div>
				</div>
			</div>

			<div className={'row'}>
				<div className={'col-12'}>
					<div dangerouslySetInnerHTML={{ __html: projectData.html }} />
				</div>
			</div>

		</div>
	);
};

Project.propTypes = propTypes;
export default withRouter(Project);
