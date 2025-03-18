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
					<Link to="/demo">
						<div className="dropdown">
							<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Personajes
							</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">Anakin skywalker</a></li>
								<li><a className="dropdown-item" href="#">Obi wan kenobi</a></li>
								<li><a className="dropdown-item" href="#">Qui-Gon Jinn</a></li>
							</ul>
						</div>
					</Link>
				</div>

				<div className="ml-auto">
					<Link to="/demo">
					<div className="dropdown">
							<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Naves
							</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">Halcón Milenario</a></li>
								<li><a className="dropdown-item" href="#">Transbordador imperial</a></li>
								<li><a className="dropdown-item" href="#">Ala-X</a></li>
							</ul>
						</div>
					</Link>
				</div>

				<div className="ml-auto">
					<Link to="/demo">
					<div className="dropdown">
							<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Planetas
							</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">Tatooine</a></li>
								<li><a className="dropdown-item" href="#">Coruscant</a></li>
								<li><a className="dropdown-item" href="#">Naboo</a></li>
							</ul>
						</div>
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