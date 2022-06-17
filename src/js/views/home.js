import React, {useContext} from "react";
import CardPersonajes  from "../component/cardPersonajes.jsx";
import CardPlanets from "../component/cardPlanets.jsx";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const {store, actions} = useContext(Context);
    // console.log(store.frasesPersonajes);
   	
	return (
		<div className = "container">
			<div className="container rounded border border-2 border-warning mt-5">
				<div className="d-inline-flex m-3 border-bottom border-warning">
					<h1 className = "text-warning mt-2" > Characters </h1>
				</div>
				
				<div className = "overflow-auto d-flex">
					{store.personajes.map((item, index) => <div className="col-lg-5 p-3"  key = {index}>< CardPersonajes id={index} terra={item.terrain} nombre = {item.name} eyes={item.eye_color} genders={item.gender} hair={item.hair_color} populations={item.population} img={store.urlImg[item.name]} frases={store.frasesPersonajes[item.name]}/></div > )}
										
                </div>	
			</div>

			<div className="container border border-warning border-2 mt-5">
				<div className="d-inline-flex m-3 border-bottom border-warning">
					<h1 className = "text-warning mt-2 " > Planets </h1>
				</div>
				
				<div className = "overflow-auto d-flex">
					{store.planetas.map((item, index) => <div className = "col-lg-5 p-3" key = {index}><CardPlanets nombre = {item.name} id={index} clima={item.climate} terrains={item.terrain} populations={item.population} rotation={item.rotation_period}  orbit={item.orbital_period} imgPlan={store.urlPlanets[item.name]}/></div > )}
                </div>	
			</div>

			
		</div>

	)

};
