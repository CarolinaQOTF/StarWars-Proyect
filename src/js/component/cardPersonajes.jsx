import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



const CardPersonajes = ({id, nombre, eyes, genders, hair, img, frases}) => {
    const {store, actions} = useContext(Context);
                        
   console.log(img);
    return(
        <div className="h-100">
            <div id= "hola" className= "card me-2 p-3 h-100" style={{width: "50 rem"}}>
                <img src={img} className="card-img-top" alt="..."/>
               <div className="card-body text-lg-start">
                    <h5 className="card-title">{nombre}</h5>
                    <p><strong>Gender:</strong> {genders}</p>
                    <p><strong>Hair color:</strong> {hair}</p>
                    <p><strong>Eyes color:</strong> {eyes}</p>
                    <p className="card-text">{frases}</p>
                    
                </div>
                <div className="card-footer d-flex">
                        <Link to={"/viewGeneral/" + id} className="btn btn-primary">
                         Learn More.!
                        </Link>
                        <button type="button" onClick={(item)=>{actions.addFavorites(nombre)}} className="btn btn-outline-danger ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        </button>
               </div>
            </div>
        </div>

    )
};

export default CardPersonajes