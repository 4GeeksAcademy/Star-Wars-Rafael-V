import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Personajes from "./views/personajes.jsx";
import Planetas from "./views/planetas.jsx";
import Vehiculos from "./views/vehiculos.jsx";
import PlanetsInfo from "./views/planetinfo.jsx";
import CharacterInfo from "./views/characterinfo.jsx";
import VehicleInfo from "./views/vehiculoinfo.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/personajes" element={<Personajes />} />
						<Route path="/planetas" element={<Planetas />} />
						<Route path="/naves" element={<Vehiculos />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/planetinfo/:idPlanet" element={<PlanetsInfo />} />
						<Route path="/vehicleinfo/:idVehicle" element={<VehicleInfo />} />
						<Route path="/characterinfo/:idCharacter" element={<CharacterInfo />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
