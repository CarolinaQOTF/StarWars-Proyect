import React, {useContext} from "react";
import CardPersonajes  from "../component/cardPersonajes.jsx";
import CardPlanets from "../component/cardPlanets.jsx";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const {store, actions} = useContext(Context);
    
   	
	return (
		<div className = "container">
			<div className="container mt-5">
				<div className="d-inline-flex m-3">
					<h3 className = "text1 mt-2 p-3" > Characters </h3>
				</div>
				
				<div className = "overflow-auto d-flex p-3">
					{store.personajes.map((item, index) => <div className="col-lg-4"  key = {index}>< CardPersonajes id={index} terra={item.terrain} nombre = {item.name} eyes={item.eye_color} genders={item.gender} hair={item.hair_color} populations={item.population} img={store.urlImg[item.name]} frases={store.frasesPersonajes[item.name]}/></div > )}
										
                </div>	
			</div>

			<div className="container mt-5">
				<div className="d-inline-flex m-3">
					<h3 className = "text1 mt-2 p-3" > Planets </h3>
				</div>
				
				<div className = "overflow-auto d-flex p-3">
					{store.planetas.map((item, index) => <div className = "col-lg-4" key = {index}><CardPlanets nombre = {item.name} id={index} clima={item.climate} terrains={item.terrain} populations={item.population} rotation={item.rotation_period}  orbit={item.orbital_period} imgPlan={store.urlPlanets[item.name]}/></div > )}
                </div>	
			</div>


	

		</div>

		

	)

};
