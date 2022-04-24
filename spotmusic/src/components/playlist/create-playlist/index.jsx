import React, { useState } from 'react';
import ListPlaylist from '../../body/list-playlist';
import PlaylistForm from '../../body/playlist-form';
import Search from '../../body/search';
import Table from '../../body/table';
import './index.css';
import Navbar from '../../module/navbar/navbar';

const CreatePlaylist = ({ setExpiredToken, accessToken }) => {
	const [value, setValue] = useState('');
	const [result, setResult] = useState([]);
	const [selected, setSelected] = useState([]);
	const [playlistData, setPlaylistData] = useState({
		title: '',
		description: '',
	});
	return (
		<>
		<Navbar/>
			<Search
				setExpiredToken={setExpiredToken}
				setResult={setResult}
				accessToken={accessToken}
				setValue={setValue}
				value={value}
			/>
			{!result.length ? null : (
				<>
					<h1 size="title">Daftar Lagu</h1>
					<Table data={result} selected={selected} setSelected={setSelected} />
				</>
			)}
			<PlaylistForm
				playlistData={playlistData}
				setPlaylistData={setPlaylistData}
				accessToken={accessToken}
				selected={selected}
			/>
			<ListPlaylist
				accessToken={accessToken}
				setExpiredToken={setExpiredToken}
			/>
		</>
	);
};

export default CreatePlaylist;
