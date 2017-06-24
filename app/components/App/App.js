import React from 'react';
import Helmet from 'react-helmet';
import { Route, withRouter, Switch } from 'react-router-dom';
import Nav from 'components/Nav/Nav';
import Landing from 'components/Landing/Landing';
import Waves from 'components/Waves/Waves';
import Forests from 'components/Forests/Forests';
import NoMatch from 'components/NoMatch/NoMatch';

require('./app.scss');


const App = function() {
	return (
		<div>
			<Helmet>
				<title>Travis Rich</title>
				<meta name="description" content="MIT Media Lab PhD. Building Healthy, Sustainable Knowledge Systems. Eats Peanut Butter." />
			</Helmet>

			<Nav />

			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/waves" component={Waves} />
				<Route path="/forests" component={Forests} />
				<Route path="/404.html" component={NoMatch} />
				<Route path="/*" component={NoMatch} />
			</Switch>
		</div>
	);
};

export default withRouter(App);
