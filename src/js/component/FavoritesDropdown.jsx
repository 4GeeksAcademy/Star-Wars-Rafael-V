import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const FavoritesDropdown = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="dropdown ml-auto">
            <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="favoritesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Favorites {store.favorites.length > 0 && `(${store.favorites.length})`}
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
                {store.favorites.length === 0 ? (
                    <li><span className="dropdown-item text-muted">No favorites</span></li>
                ) : (
                    store.favorites.map((fav, index) => (
                        <li key={index} className="d-flex justify-content-between align-items-center px-2">
                            <Link to={`/characterinfo/${index + 1}`} className="dropdown-item">{fav}</Link>
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => actions.eliminarFavorito(fav)}
                            >
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default FavoritesDropdown;
