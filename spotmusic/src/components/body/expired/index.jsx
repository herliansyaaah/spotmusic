import React from 'react';
import Header from '../../module/header';

const Expired = () => {
	return (
		<>
			<Header size="title">Yaaahhh</Header>
			<Header size="center">Token kamu sudah kadaluarsa</Header>
			<div onClick={() => (window.location = '/')} className="button">
				Kembali
			</div>
		</>
	);
};

export default Expired;
