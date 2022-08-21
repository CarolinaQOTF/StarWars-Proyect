import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {
	const {store, actions} = useContext(Context);


	return (
		<div>
			<nav className="navbar navbar-light navbar-light-one mb-3">
				<div className="container ">
					
					<Link to="/"className="navbar-brand">
						<img src="https://i.pinimg.com/236x/f0/18/57/f01857e0762a00565bba4fb83097fbdf.jpg" className="img-fluid w-50" alt="..."/>	
					</Link>
					
					<div className="dropdown">
						<button className="btn btn-lg button dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span >{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu dropdown-menu2" aria-labelledby="dropdownMenuButton1">
							{store.favorites.map((item,index)=><li key={index} className="dropdown-item ">
							{item}<button className="btn-trash border border-1 float-end" onClick={() => actions.deleteFavorites(item)}>
							<i className="fas fa-trash-alt"></i></button></li>)}
						</ul>
		            </div>
					
				</div>
            </nav>
		</div>
	);
};
