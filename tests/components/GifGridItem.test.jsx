import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Pruebas en GifGridItem', () => { 

    const title = 'The Simpsons';
    const url = 'http://thesimps.com/bart.gif'

    test('Debe hacer match con el snapshot', () => { 
        const {container} = render(<GifGridItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

     test('Debe mostrar la imagen con el url y el alt indicado', () => { 
        //siempre tenemos que tomar el sujeto de pruebas y renderizarlo
        render(<GifGridItem title={title} url={url}/>);
        //screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe de mostrar el titulo en el componente', () => { 
        //siempre tenemos que tomar el sujeto de pruebas y renderizarlo
        render(<GifGridItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });
});