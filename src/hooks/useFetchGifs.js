import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Un hook no es mas que una fcn que regresa algo
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

	const getImages = async() => {
		const newImages = await getGifs(category);
		setImages(newImages);
        setIsLoading(false);
	}

	useEffect(() => {
		getImages();
	}, [ ])//Aca le pasamos las dependencias para decirle cuando se va a ejecutar, si las dejamos vacias se va a ejecutar la primera vez que se cargue el componente

  return {
    images,
    isLoading
  }
}
