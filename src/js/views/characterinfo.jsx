import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import peopleData from "../../img/people.json"

const CharacterInfo = () => {
    const { actions, store } = useContext(Context)
    const { idCharacter } = useParams()

    const characterImage = peopleData.people.find(p => p.id === Number (idCharacter-1))?.image || "https://via.placeholder.com/300";

    useEffect(() => {
        actions.obtenerInfoPersonaje(idCharacter)
    }, [])
    return (
        <div className= "d-flex justify-content-center mt-3">
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={characterImage} className="img-fluid rounded-start" alt={store.personaje.name}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.personaje.name}</h5>
                            <p className="card-text">gender: {store.personaje.gender}</p>
                            <p className="card-text">eye color: {store.personaje.eye_color}</p>
                            <p className="card-text">hair color: {store.personaje.hair_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterInfo