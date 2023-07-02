import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Pruebas en el hook de useFetchGifs', () => { 

    test('Debe de regresar el estado inicial', () => { 
        //Estado inicial: images=[] y isLoading = true
        //renderHooks nos sirve para renderizar el hook y usarlo como sujeto de pruebas
        //El result te retorna el return del hook
        const { result } = renderHook(() => useFetchGifs('The Simpsons'));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('Debe de regresar un arreglo de imagenes y el isLoading en false', async() => { 
        const { result } = renderHook(() => useFetchGifs('The Simpsons'));
        //Aca tenemos que lograr que el hook haga su trabajo, cargar las imagenes y cambiar el isLoading
        //Podemos usar el waitFor
        await waitFor(
            //Aca lo que hace es que espera que esta condicion se cumpla, una vez que se cumple continua
            //evaluando y podemos hacer los expect con el resultado del hook
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });

});