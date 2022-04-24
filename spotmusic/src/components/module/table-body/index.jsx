import React from 'react';
import './card-module.css';

const TableBody = ({ data, handleSelect, selected, handleDelete }) => {
	return (
		<div className="card">
			<img src={data.album.images[0].url} alt="" className="cardImage" />
			<div className="title-song" >{data.name}</div>
			<div className="artist">{data.artists[0].name}</div>
			<div className="albums">Album • {data.album.name}</div>
			{selected.includes(data.uri) ? (
					<button className="deselect" onClick={() => handleDelete(data.uri)}>
						Deselect
					</button>
				) : (
					<button className="select" onClick={() => handleSelect(data.uri)}>
						Select
					</button>
				)}
				</div>
		

);
};


export default TableBody;
