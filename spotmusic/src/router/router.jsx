import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home} from '../pages/index';
import CreatePlaylist from '../components/playlist/create-playlist/form-list';



const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/home" component={CreatePlaylist} />
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;