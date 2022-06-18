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
                <div className=" mt-1 ms-2">
					<h1 className="text-center border-bottom border-warning border-1 ms-2 text-warning"><strong>{store.planetas[theId]?.name}</strong></h1>
                    <p className="text-center text-white mt-4 ms-2"><strong> {store.descriptionPlanets[store.planetas[theId]?.name]}</strong></p>
			    </div>
            </div>
			<div className="container mt-5">
				<ul className="row nav justify-content-center border-top border-warning pb-3 mb-3 text-center">
					<li className="col nav-item text-warning"><p href="#" className="nav-link px-2 text-warning"><strong>Name</strong><br></br>{store.planetas[theId]?.name}</p></li>
				    <li className="col nav-item"><p href="#" className="nav-link px-2 text-warning"><strong>Climate</strong><br></br>{store.planetas[theId]?.climate}</p></li>
				    <li className="col nav-item"><p href="#" className="nav-link px-2 text-warning"><strong>Population</strong><br></br>{store.planetas[theId]?.population}</p></li>
				    <li className="col nav-item"><p href="#" className="nav-link px-2 text-warning"><strong>Orbital Period</strong><br></br>{store.planetas[theId]?.orbital_period}</p></li>
				    <li className="col nav-item"><p href="#" className="nav-link px-2 text-warning"><strong>Rotation Period</strong><br></br>{store.planetas[theId]?.rotation_period}</p></li>
				    <li className="col nav-item"><p href="#" className="nav-link px-2 text-warning"><strong>Diameter</strong><br></br>{store.planetas[theId]?.diameter}</p></li>
			    </ul>
			</div>
	    </div>
	);
};


