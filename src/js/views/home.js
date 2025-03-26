import React from "react";

import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Bienvenido a Star Wars</h1>

		<div className="card-group">
			<div className="card mx-1">
				<img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/10/anakin-padme-star-wars-episodio-iii-2090677.jpg?tf=3840x" className="card-img-top" alt="..." style= {{height:"19rem"}} />
				<div className="card-body">
					<h5 className="card-title">LA LUZ</h5>
					<p className="card-text">En Star Wars, la luz se refiere al lado luminoso de la Fuerza, a la velocidad de la luz y a los sables de luz. El lado luminoso de la Fuerza es un aspecto de la Fuerza que se asocia con la calma, el conocimiento y la defensa.</p>
					<p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
				</div>
			</div>

			<div className="card mx-1">
				<img src="https://preview.redd.it/omwdzg42vj2e1.jpeg?auto=webp&s=b28d6381a042e4339773b140c928889647bb212a" className="card-img-top" alt="..." style= {{height:"19rem"}} />
				<div className="card-body">
					<h5 className="card-title">LA FUERZA</h5>
					<p className="card-text">En Star Wars, la Fuerza es un campo de energía que une a todos los seres vivos de la galaxia. Los Jedi, los Sith, y otros seres sensibles a la Fuerza pueden usarla para obtener habilidades extraordinarias. </p>
					<p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
				</div>
			</div>

			<div className="card mx-1">
				<img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/05/darth-vader-star-wars-1938913.jpg?tf=3840x" className="card-img-top" alt="..." style= {{height:"19rem"}}/>
				<div className="card-body">
					<h5 className="card-title">EL LADO OSCURO</h5>
					<p className="card-text">El lado oscuro de la Fuerza es una dimensión de la Fuerza en la saga Star Wars que se asocia con el miedo, el sufrimiento y las emociones negativas. Los usuarios del lado oscuro (Los Sith) obtienen poder de estas emociones. </p>
					<p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
				</div>
			</div>
			
		</div>

	</div>
);
