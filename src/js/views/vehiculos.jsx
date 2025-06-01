import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import CardVehiculos from "../component/cardvehiculos.jsx";

const Vehiculos = () => {
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.obtenerVehiculos()
    }, [])

    return (
        <div className="container">
            <h1>Vehiculos</h1>
            <div className="d-flex flex-row overflow-scroll">
                {store.vehiculos.map((item, index) => (
                    <CardVehiculos
                        key={index}
                        name={item.name}
                        id={index}
                    />
                ))}
            </div>
        </div>
    )
}
export default Vehiculos