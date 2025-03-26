import React from "react";
import { Link } from "react-router-dom";

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
					<Link to="/demo">
						<button className="btn btn-dark">Lista de Favotitos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};