import React from "react"
import planetsData from "../../img/planets.json"
import { Link } from "react-router-dom";

const CardPlanetas = ({ name, id, diameter, gravity }) => {
    const planetsImage = planetsData.planets.find(p => p.id === id)?.image || "https://via.placeholder.com/300";

    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={planetsImage} className="card-img-top" alt={name}  />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">diametro: <strong>{diameter}</strong></p>
                <p className="card-text">gravedad: <strong>{gravity}</strong></p>
                <div className="d-flex justify-content-between">
                    <Link to={"/planetinfo/" + (id+1)} className="btn btn-outline-primary">More Info</Link>
                    <button className="btn btn-outline-warning"><i className="fa fa-heart"> </i></button>
                </div>
            </div>
        </div>
    )
}

export default CardPlanetas