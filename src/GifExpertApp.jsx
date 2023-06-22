// import React from 'react'

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
	//Un Hook es una función de javascript que permite crear/acceder al estado y a los ciclos de vida de React

	//Cuando tenemos que cambiar el HTML necesitamos un hook para mantener el estado
	//En este caso cuando modifiquemos las categorias
	//en useState(inicial) tenemos que poner el estado inicial
	const [categories, setCategories] = useState(['The Simpsons']); //Aca ya tenemos un espacio en memoria para manejar mis categorias

	const onAddCategory = (newCategory) => {
		//console.log(newCategory);
		if(categories.includes(newCategory)) return; 
		
		//Para react debemos dejar de usar el .push, pq aca es utilizado para mutar el obj, debemos rear un nuevo arreglo. Para esto usamos el setCategories
		setCategories([newCategory, ...categories]) //Utilizamos el operador spread para hacer una copia del array y luego agregamos el elemento que queremos
		//Otra forma
		//setCategories(cat => [...cat, 'SuperCampeones']);//Aca usamos el callback que le podemos mandar al useState
	}

  return (
    <>
			<h1>Gif Expert App</h1>

			<AddCategory 
				/*setCategoriesToChild={setCategories}*//**De esta manera importamos un functional component. Aca le podemos mandar una function o variables al componente hijo 
				* en este caso le mandamos una funcion con el parametro de la setCategories, para qye cuando cambie en el hijo, la llame y la pueda actualizar
			 */
				onNewCategory={(value) => onAddCategory(value)}
			/>

			{/**El map me permite barrer los elementos del arreglo y regresar algo nuevo*/}
			{	
				categories.map(category => 
					//Igual que el return pero sin el return ni los {}
					(
						<GifGrid 
							key={category} 
							category={category}/>
					)	
				)
			}
    </>
  )
}
