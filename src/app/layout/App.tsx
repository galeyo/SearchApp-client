import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import HomePage from '../home/HomePage';
import { Route } from 'react-router-dom';
import { RouteComponentProps, withRouter, useHistory } from 'react-router';
import NavBar from '../nav/NavBar';
import { RootStoreContext } from '../stores/rootStore';
import LoadingComponent from './LoadingComponent';
import { observer } from 'mobx-react-lite';
import { Container } from 'semantic-ui-react';

const App: React.FC<RouteComponentProps> = () => {
	const rootStore = useContext(RootStoreContext);
	const { setAppLoaded, appLoaded } = rootStore.commonStore;
	const history = useHistory();

	useEffect(() => {
		setAppLoaded();
		history.push('/aircrafts');
	}, [setAppLoaded]);

	if (!appLoaded) return <LoadingComponent content='Loading app ...' />;

	return (
		<Fragment>
			<NavBar />
			<ToastContainer position='bottom-right' />
			<Container style={{marginTop: '7em'}}>
				<Route exact path='/aircrafts' component={HomePage} />
			</Container>
		</Fragment>
	);
};

export default withRouter(observer(App));
