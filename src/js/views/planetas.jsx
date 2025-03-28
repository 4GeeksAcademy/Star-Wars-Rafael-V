import React,{useContext,useEffect} from "react";
import { Context } from "../store/appContext";
import CardPlanetas from "../component/cardplanetas.jsx";

const Planetas = ()=>{
        const{actions,store} = useContext(Context)
    
        useEffect(()=>{
            actions.obtenerPlanetas()
        },[])

    return (
        <div>
            <h1>Planetas</h1>
            <div className="d-flex flex-row overflow-scroll">
                {store.planetas.map((item,index)=>(
                    <CardPlanetas
                    key={index}
                    name = {item.name}
                    id={index}
                    diameter={item.diameter}
                    gravity={item.gravity}
                    />
                ))}
            </div>
        </div>
    )
}
export default Planetas