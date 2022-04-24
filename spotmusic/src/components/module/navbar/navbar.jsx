import React from "react";
import './index.css';
import { Link } from 'react-router-dom';


function Navbar(){
    return(
        <div className="navbar-container">
			<ul className="navbar">
				<div className="left-item">
					<Link to="/" className="navbar-item">
						Home
					</Link>
					<Link to="/home" className="navbar-item">
						Playlist
					</Link>
				</div>
			</ul>
		</div>
    );
}

export default Navbar;