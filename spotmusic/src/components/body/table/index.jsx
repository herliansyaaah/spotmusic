import React, { useEffect } from 'react';
import TableBody from '../../module/table-body';
import './table.css';
import styles from '../../module/table-body/card-module.css';

const Table = ({ data, selected, setSelected }) => {
	const handleSelect = (uri) => {
		setSelected([...selected, uri]);
	};

	const handleDelete = (uri) => {
		setSelected(selected.filter((item) => item !== uri));
	};

	useEffect(() => {
		// console.log(selected);
	}, [selected]);
	
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardGrid}>
				{data.map((data, id) => (
					<TableBody
						data={data}
						id={id}
						key={id}
						handleSelect={handleSelect}
						handleDelete={handleDelete}
						selected={selected}
					/>
				))}
			</div>
		</div>
	);
};


export default Table;
