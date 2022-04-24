import React, { useState } from 'react';
import Header from '../../module/header';
import './search.css';

const Search = ({
	setExpiredToken,
	setResult,
	accessToken,
	setValue,
	value,
}) => {
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value.length > 0) {
			let url = `https://api.spotify.com/v1/search?type=track&limit=10&q=${value}`;

			fetch(url, {
				headers: {
					Authorization: 'Bearer ' + accessToken,
				},
			})
				.then((res) => res.json())
				.then((res) => {
					setMessage('');
					if (typeof res.error === 'object') {
						setExpiredToken(true);
					} else {
						setResult(res.tracks.items);
					}
				});
		} else {
			setMessage('⚠️ kolom tidak boleh kosong');
		}
	};
	return (
		<div className="search-container">
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					value={value}
					onChange={(e) => handleChange(e)}
					className="text-field"
					placeholder='Search Music...'
				/>
				<input type="submit" className="submit-button" value="Search" />
			</form>
			{message && <div className="error">{message}</div>}
		</div>
	);
};

export default Search;
