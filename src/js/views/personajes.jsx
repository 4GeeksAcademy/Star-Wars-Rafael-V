import React,{useContext,useEffect} from "react";
import { Context } from "../store/appContext";

const Personajes = ()=>{
    const{actions,store} = useContext(Context)

    useEffect(()=>{
        actions.obtenerPersonajes()
    },[])
    
    return (
        <div className="container">
            <h1>Personajes</h1>
        </div>
    )
}
export default Personajes