import React from "react"
import planetsData from "../../img/planets.json"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const CardPlanetas = ({ name, id, }) => {
    const planetsImage = planetsData.planets.find(p => p.id === id)?.image || "https://via.placeholder.com/300";
    const { actions, store } = useContext(Context)
    const isFavorite = store.favorites?.includes(name);

    const toggleFavorite = () => {
        if (isFavorite) {
            actions.eliminarFavorito(name);
        } else {
            actions.agregarFavorito(name);
        }
    }
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={planetsImage} className="card-img-top" alt={name}  />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={"/planetinfo/" + (id+1)} className="btn btn-outline-primary">More Info</Link>

                    <button className="btn btn-outline-warning"
                        onClick={toggleFavorite}><i className={`${isFavorite ? "fa" : "fa-regular"} fa-heart`}> </i></button>
                </div>
            </div>
        </div>
    )
}

export default CardPlanetas