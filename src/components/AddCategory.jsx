import { useState } from 'react';
import propTypes from 'prop-types';


export const AddCategory = ({onNewCategory}) => { //Aca recibimos lo que enviamos desde le padre (props)

	//Cada componente puede tener sus propios hooks
	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({target}) => {
		setInputValue(target.value);
	}

	const onSubmit = (event) => {
		event.preventDefault();//Para evitar el refresh por defecto
		//Aca tenemos que hacer el intercambio de informacion con el componenet padre para mandarle el valor del input. Aca llamamos a la function que comunica con el padre
		//y le mandamos los nuevos valores de las categorias para que se actulicen en setCategories
		if (inputValue.trim().length <= 1) return;
		onNewCategory(inputValue.trim());//Aca emitimos el valor del input value, es como el emit de Angular

		setInputValue('');
	}

	return (
		<form onSubmit={(event) => onSubmit(event)} aria-label='form'> 
			<input 
				type="text"
				placeholder="Buscar Gifs"
				value={inputValue}
				onChange={onInputChange} //Lo podemos poner asi pq siempre mandamos el event, asi nos obviamos pasarlo por el param
			/>
		</form>
	)
}

AddCategory.propTypes = {
	onNewCategory: propTypes.func.isRequired
}