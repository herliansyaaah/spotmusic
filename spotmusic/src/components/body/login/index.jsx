import React from 'react';
import Header from '../../module/header';
import './login.css';
import Logo from '../../img/Spotify_Logo.png';

const Login = () => {
	const generateRandomString = (length) => {
		var text = '';
		var possible =
			'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

		for (var i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	};

	const handleLogin = (e) => {
		e.preventDefault();
		var stateKey = 'spotify_auth_state';
		var client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
		var redirect_uri = process.env.REACT_APP_REDIRECT_URL;

		var state = "KMFE5095Suherli";

		localStorage.setItem(stateKey, state);
		var scope = 'user-read-private user-read-email playlist-modify-private playlist-read-private';

		var url = 'https://accounts.spotify.com/authorize';
		url += '?response_type=token';
		url += '&client_id=' + encodeURIComponent(client_id);
		url += '&scope=' + encodeURIComponent(scope);
		url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
		url += '&state=' + encodeURIComponent(state);

		window.location = url;
	};

	return (
		<div className="login-container">
			<img src={Logo}></img>
			<div onClick={(e) => handleLogin(e)} className="button">
				Login
			</div>
		</div>
	);
};

export default Login;
