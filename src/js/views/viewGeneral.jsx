import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



const ViewGeneral = ({nombre}) => {
    const {store, actions} = useContext(Context);
    const {theId} = useParams() //theId se obtiene de la url con useParams

    return (
        <div className="container ">
            <div className="jumbotron d-flex">
                <div className="container mt-2">
                    <img src={store.urlImg[store.personajes[theId]?.name]} alt="..." style={{width: "50 rem"}}/>
                </div>
                <div className=" ms-2">
                    <h1 className="text-center border-bottom border-warning border-1 ms-2 text-warning"><strong>{store.personajes[theId]?.name}</strong></h1>
                    <p className="text-center mt-2 ms-2 text-white"><strong> {store.description[store.personajes[theId]?.name]}</strong></p>
                </div>
	    	</div>
            <div className="container mt-5">            
             <ul className="row nav justify-content-center border-top border-warning pb-3 mb-3 text-center">
                <li className="col nav-item text-center"><p href="#" className="nav-link px-2 text-warning"><strong>Height</strong><br></br>{store.personajes[theId]?.height}</p></li>
		    	<li className="col nav-item text-center"><p href="#" className="nav-link px-2 text-warning"><strong>Hair Color</strong><br></br>{store.personajes[theId]?.hair_color}</p></li>
                <li className="col nav-item text-center"><p href="#" className="nav-link px-2 text-warning"><strong>Eyes Color</strong> <br></br>{store.personajes[theId]?.eye_color}</p></li>
                <li className="col nav-item text-center"><p href="#" className="nav-link px-2 text-warning"><strong>Gender</strong><br></br>{store.personajes[theId]?.gender}</p></li>
                <li className="col nav-item text-center"><p href="#" className="nav-link px-2 text-warning"><strong>Birth Year</strong><br></br>{store.personajes[theId]?.birth_year}</p></li>
                </ul>
            </div>
        </div>		
	);
};

export default ViewGeneral