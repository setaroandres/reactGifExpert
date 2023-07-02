import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en AddCategory', () => { 
    const inputValue = 'Simpsons';
    test('Debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={() => {}}/>);
        //Debemos disparar el onChange  que va a ejecutar el onInputChange y nos va a setear el valor de la caja de busqueda
        const input = screen.getByRole('textbox');

        //Para disparar eventos usamos fireEvent. El evento input es para inputs, dispara el evento de agregar info al input
        fireEvent.input(input, {target: {value: inputValue}});
        expect(input.value).toBe(inputValue);
    });

    test('Debe de llamar a onNewCategory si el input tiene un valor', () => { 
        //const inputValue = 'Simpsons';
        //Aca hacemos el mock de onNewCategory usando jest.fn
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        //Aca tenemos que hacer triger del submit
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form); //El event y el prevent default ya van por defecto

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar a onNewCategory si el input no tiene un valor', () => { 
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        const form = screen.getByRole('form');

        fireEvent.submit(form); //El event y el prevent default ya van por defecto

        //expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled;
    });
});