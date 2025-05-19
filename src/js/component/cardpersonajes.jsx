import React from "react"
import peopleData from "../../img/people.json"
import { Link } from "react-router-dom";

const CardPersonajes = ({ name, gender, eyesColor,id }) => {
    const peopleImage = peopleData.people.find(p => p.id === id)?.image || "https://via.placeholder.com/300";

    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={peopleImage} className="card-img-top" alt={name} style={{height:"25rem"}}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">gender: <strong>{gender}</strong></p>
                <p className="card-text">eyesColor: <strong>{eyesColor}</strong></p>
                <div className="d-flex justify-content-between">
                    <Link to={"/characterinfo/" + (id+1)} className="btn btn-outline-primary">More Info</Link>
                    <button className="btn btn-outline-warning"><i className="fa fa-heart"> </i></button>
                </div>
            </div>
        </div>
    )
}

export default CardPersonajes