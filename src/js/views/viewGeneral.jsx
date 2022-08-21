import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


const ViewGeneral = ({nombre}) => {
    const {store, actions} = useContext(Context);
    const {theId} = useParams() //theId se obtiene de la url con useParams

    return (
        <div >
            <div className=" container-uno">
                <div className="nombre">
                    <h2> <strong>{store.personajes[theId]?.name}</strong></h2>
                    <ul>
                        <p><strong>Height:   </strong>{store.personajes[theId]?.height}</p>
                        <p><strong>Hair Color:   </strong>{store.personajes[theId]?.hair_color}</p>
                        <p><strong>Eyes Color:   </strong> {store.personajes[theId]?.eye_color}</p>
                        <p><strong>Gender:   </strong>{store.personajes[theId]?.gender}</p>
                        <p><strong>Birth Year:   </strong>{store.personajes[theId]?.birth_year}</p>
                    </ul>
                </div>
                
                <div className="descripcion-person">
                    
                    <p>{store.description[store.personajes[theId]?.name]}</p>
                   
                </div>
               
	    	</div>
            <div className="container-dos">         
                   
                   <img id="imagenper" src={store.urlImg[store.personajes[theId]?.name]} alt="..."/>
           </div>
           
              
       </div>
        
       		
	);
};

export default ViewGeneral