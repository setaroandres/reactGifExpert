import propTypes from 'prop-types';
//La fcn de fetch de los gifs esta en helpers

import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

	//Aca creamos el custom hook para poenr toda la logica del getGifs. Hacemos desestructuracion de obj para poder usar y de volver lo que queramos del hook.
	const {images, isLoading} = useFetchGifs(category);

	//console.log({images, isLoading});

	return (
			<>
				<h3>{category}</h3>
				{
					isLoading && (<h2>Cargando...</h2>)//el && es un if corto....is isloading = true en este caso
				}
				
				<div className="card-grid">
					{
						images.map((image) => 
							(
								<GifGridItem 
									key={image.id}
									{...image}//Todas las prop que vienen en el image las estamos esparciendo y las mandamos al hijo
								/>
							)
						)
					}
				</div>
			</>
	)
}

GifGrid.prototype = {
	category: propTypes.string.isRequired
}