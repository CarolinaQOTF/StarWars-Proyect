import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Single = props => {
	const {store, actions} = useContext(Context);
	const {theId} = useParams()
	
	return (
		<div >
			<div className="container-uno">
				<div className="nombre">
				<h2><strong>{store.planetas[theId]?.name}</strong></h2>
				<ul>
					<p ><strong>Name: </strong>{store.planetas[theId]?.name}</p>
				    <p><strong>Climate: </strong>{store.planetas[theId]?.climate}</p>
				    <p><strong>Population: </strong>{store.planetas[theId]?.population}</p>
				    <p><strong>Orbital Period: </strong>{store.planetas[theId]?.orbital_period}</p>
				    <p><strong>Rotation Period: </strong>{store.planetas[theId]?.rotation_period}</p>
				    <p><strong>Diameter: </strong>{store.planetas[theId]?.diameter}</p>
			    </ul>
			
					
                </div>
                <div className=" descripcion-planet">
					
                    <p>{store.descriptionPlanets[store.planetas[theId]?.name]}</p>
			    </div>
            </div>
			<div className="container-dos">
				<img id="imagenper" src={store.urlPlanets[store.planetas[theId]?.name]} alt="..."/>
			</div>
			
			
	    </div>
	);
};


