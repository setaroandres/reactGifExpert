import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
//Aca le decimos que haga un mock completo de este path
jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => { 
    const key = '123456';
    const category = 'The Simpsons';
    const gifs = [
        {
            id: '123',
            title: 'Simpsons',
            url: 'https://gifs/simpsons',
        },
        {
            id: '1234',
            title: 'Batman',
            url: 'https://gifs/batman',
        }
    ]
    test('Debe de mostrar el loading inicialmente', () => { 
        //Aca hacemos el mock en si, haciendo el retorno de los elementos que retorna el mock
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid key={key} category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('Debe de mostrar imagenes cuando se cargan desde el useFetchGifs', () => {
        //Tenemos que hacer un mock de los hooks ya que no debemos testear los hooks en si 
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        
        render(<GifGrid key={key} category={category} />);
        //screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    });
})