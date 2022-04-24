import React, { useState } from 'react';
import Search from '../../body/search';
import Table from '../../body/table';
import './index.css';
import Navbar from '../../module/navbar/navbar';

const CreatePlaylist = ({ setExpiredToken, accessToken }) => {
	const [value, setValue] = useState('');
	const [result, setResult] = useState([]);
	const [selected, setSelected] = useState([]);
	
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
			
		</>
	);
};

export default CreatePlaylist;
