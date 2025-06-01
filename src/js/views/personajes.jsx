import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import CardPersonajes from "../component/cardpersonajes.jsx";

const Personajes = () => {
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.obtenerPersonajes()
    }, [])

    return (
        <div className="container">
            <h1>Personajes</h1>
            <div className="d-flex flex-row overflow-scroll">
                {store.personajes.map((item, index) => (
                    <CardPersonajes
                        key={index}
                        name={item.name}
                        id={index}
                    />
                ))}
            </div>
        </div>
    )
}
export default Personajes