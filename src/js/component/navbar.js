import React from "react";
import { Link } from "react-router-dom";

import FavoritesDropdown from "./FavoritesDropdown.jsx";


export const Navbar = () => {

	return (
		<nav className="navbar bg-dark border-bottom border-body">
			<div className="container">
				<Link to="/">
					<span className="navbar- mb-0 h10">STAR WARS</span>
				</Link>

				<div className="ml-auto">
					<Link to="/personajes">
						<button type="button" class="btn btn-secondary">Personajes</button>
					</Link>
				</div>

				<div className="ml-auto">
					<Link to="/naves">
						<button type="button" class="btn btn-secondary">Naves</button>
					</Link>
				</div>

				<div className="ml-auto">
					<Link to="/planetas">
						<button type="button" class="btn btn-secondary">Planetas</button>
					</Link>
				</div>


				<div className="ml-auto">
					<FavoritesDropdown />
				</div>
			</div>
		</nav>
	);
};