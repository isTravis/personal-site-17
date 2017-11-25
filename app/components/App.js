import React from 'react';
import Helmet from 'react-helmet';
import { Route, withRouter, Switch } from 'react-router-dom';
import Landing from 'components/Landing';
import Project from 'components/Project';

require('../style.scss');

const App = function() {
	return (
		<div>
			<Helmet>
				<title>Travis Rich</title>
				<meta name="description" content="MIT Media Lab PhD. Building Healthy, Sustainable Knowledge Systems. Eats Peanut Butter." />
			</Helmet>

			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/:slug" component={Project} />
			</Switch>
		</div>
	);
};

export default withRouter(App);
