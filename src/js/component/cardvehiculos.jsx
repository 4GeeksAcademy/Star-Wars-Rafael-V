import React from "react"
import vehicleData from "../../img/vehicle.json"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const CardVehiculos = ({ name, id }) => {
    const vehicleImage = vehicleData.vehicles.find(v => v.id === id)?.image || "https://via.placeholder.com/300";
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
            <img src={vehicleImage} className="card-img-top" alt={name} style={{height:"25rem"}}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={"/vehicleinfo/" + (id+1)} className="btn btn-outline-primary">More Info</Link>

                    <button className="btn btn-outline-warning"
                        onClick={toggleFavorite}><i className={`${isFavorite ? "fa" : "fa-regular"} fa-heart`}> </i></button>
                </div>
            </div>
        </div>
    )
}

export default CardVehiculos