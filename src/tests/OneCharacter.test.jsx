import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router} from 'react-router-dom';
import OneCharacter from '../components/OneCharacter'

test('render backButton', ()=>{
    render(<Router><OneCharacter/></Router>)
    const backButton = screen.getByText(/Back/i);
    expect(backButton).toBeInTheDocument();
});

/*Aquí interfieren rutas en este botón que testeamos,
por eso vamos a testearlo así que debemos importar también 
el ROUTER DOM:
1-método render y el router con el componente dentro
2-la constante que contiene metodo y el get con paréntesis del texto que probamos
3-Probamos que el texto del botón diga Back y la i por si es minusc o mayusc
4-método expect al que le pasamos la constante y aplicamos métod toBe*/



