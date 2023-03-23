import { render, screen } from '@testing-library/react';
import OneCharacter from '../components/OneCharacter';
import { MemoryRouter as Router} from 'react-router-dom';

/*Aquí interfieren rutas en este botón que testeamos, por eso vamos a testearlo así que debemos importar también el ROUTER DOM*/
test('render backButton', ()=>{
    render(<Router><OneCharacter/><Router/>);
    const backButton = screen.getByText(/Back/i);
    expect(backButton).toBeInTheDocument();
});

