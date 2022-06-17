import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Single = props => {
	const {store, actions} = useContext(Context);
	const {theId} = useParams()
	
	return (
		<div className="container ">
			<div className="jumbotron d-flex">
				<div>
					<img src={store.urlPlanets[store.planetas[theId]?.name]} alt="..."/>
                </div>
                <div className=" mt-5 ms-2">
					<h1 className="text-center border-bottom border-danger border-1 ms-2"><strong>{store.planetas[theId]?.name}</strong></h1>
                    <p className="text-center mt-4 ms-2"><strong> {store.descriptionPlanets[store.planetas[theId]?.name]}</strong></p>
			    </div>
            </div>
			<div className="container mt-5">
				<ul className="row nav justify-content-center border-top border-danger pb-3 mb-3 text-center">
					<li className="col nav-item text-danger"><p href="#" className="nav-link px-2 text-danger"><strong>Name</strong><br></br>{store.planetas[theId]?.name}</p></li>
				    <li className="col nav-item"><p href="#" className="nav-link px-2 text-danger"><strong>Climate</strong><br></br>{store.planetas[theId]?.climate}</p></li>
				    <li className="col nav-item"><p href="#" className="nav-link px-2 text-danger"><strong>Population</strong><br></br>{store.planetas[theId]?.population}</p></li>
				    <li className="col nav-item"><p href="#" className="nav-link px-2 text-danger"><strong>Orbital Period</strong><br></br>{store.planetas[theId]?.orbital_period}</p></li>
				    <li className="col nav-item"><p href="#" className="nav-link px-2 text-danger"><strong>Rotation Period</strong><br></br>{store.planetas[theId]?.rotation_period}</p></li>
				    <li className="col nav-item"><p href="#" className="nav-link px-2 text-danger"><strong>Diameter</strong><br></br>{store.planetas[theId]?.diameter}</p></li>
			    </ul>
			</div>
	    </div>
	);
};


