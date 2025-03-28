import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import planetsData from "../../img/planets.json"
//cuando es un componente la primera letra va en MAYUSCULA la segunda palabra y tercera su primera letra va en mayuscula ("P"lanets"I"nfo) solo en js
//cuando es una variable la primera letra va en minuscula y el resto va igual sea la primera letra segunda palabra en mayuscula (set"L"ista) solo en js
const PlanetsInfo = () => {
    const { actions, store } = useContext(Context)
    const { idPlanet } = useParams()

    const planetsImage = planetsData.planets.find(p => p.id === Number (idPlanet-1))?.image || "https://via.placeholder.com/300";

    useEffect(() => {
        actions.obtenerInfoPlaneta(idPlanet)
    }, [])
    return (
        <div className= "d-flex justify-content-center mt-3">
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={planetsImage} className="img-fluid rounded-start" alt={store.planeta.name}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.planeta.name}</h5>
                            <p className="card-text">climate: {store.planeta.climate}</p>
                            <p className="card-text">diamtro: {store.planeta.diameter}</p>
                            <p className="card-text">diamtro: {store.planeta.diameter}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanetsInfo