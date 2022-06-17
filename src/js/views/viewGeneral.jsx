import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



const ViewGeneral = ({nombre}) => {
    const {store, actions} = useContext(Context);
    const {theId} = useParams() //theId se obtiene de la url con useParams

    return (
        <div className="container ">
            <div className="jumbotron d-flex">
                <div>
                    <img src={store.urlImg[store.personajes[theId]?.name]} alt="..."/>
                </div>
                <div className=" mt-5 ms-2">
                    <h1 className="text-center border-bottom border-danger border-1 ms-2"><strong>{store.personajes[theId]?.name}</strong></h1>
                    <p className="text-center mt-4 ms-2"><strong> {store.description[store.personajes[theId]?.name]}</strong></p>
                </div>
	    	</div>
            <div className="container mt-5">            
             <ul className="row nav justify-content-center border-top border-danger pb-3 mb-3 text-center">
                <li className="col nav-item text-center"><p href="#" className="nav-link px-2 text-danger"><strong>Height</strong><br></br>{store.personajes[theId]?.height}</p></li>
		    	<li className="col nav-item text-center"><p href="#" className="nav-link px-2 text-danger"><strong>Hair Color</strong><br></br>{store.personajes[theId]?.hair_color}</p></li>
                <li className="col nav-item text-center"><p href="#" className="nav-link px-2 text-danger"><strong>Eyes Color</strong> <br></br>{store.personajes[theId]?.eye_color}</p></li>
                <li className="col nav-item text-center"><p href="#" className="nav-link px-2 text-danger"><strong>Gender</strong><br></br>{store.personajes[theId]?.gender}</p></li>
                <li className="col nav-item text-center"><p href="#" className="nav-link px-2 text-danger"><strong>Birth Year</strong><br></br>{store.personajes[theId]?.birth_year}</p></li>
                </ul>
            </div>
        </div>		
	);
};

export default ViewGeneral