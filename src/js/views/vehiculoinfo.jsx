import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import vehiclesData from "../../img/vehicle.json"

const VehiculoInfo = () => {
    const { actions, store } = useContext(Context)
    const { idVehicle } = useParams()

    const vehiclesImage = vehiclesData.vehicles.find(v => v.id === Number (idVehicle -1))?.image || "https://via.placeholder.com/300";

    useEffect(() => {
        actions.obtenerInfoVehiculo(idVehicle)
    }, [])
    return (
        <div className= "d-flex justify-content-center mt-3">
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={vehiclesImage} className="img-fluid rounded-start" alt={store.vehiculo.name}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.vehiculo.name}</h5>
                            <p className="card-text">modelo: {store.vehiculo.model}</p>
                            <p className="card-text">pasajeros: {store.vehiculo.passengers}</p>
                            <p className="card-text">capacidad de carga: {store.vehiculo.cargo_capacity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehiculoInfo