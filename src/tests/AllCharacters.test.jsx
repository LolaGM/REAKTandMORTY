import AllCharacters from '../components/AllCharacters';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

//como vamos a crear dos test para comprobar el mismo componente usamos beforeEach y dentro de render el componente
beforeEach(()=>{
    render(<Router><AllCharacters/></Router>);
});
//esribimos el test para comprobar que sale por pantalla la imagen de todos los personajes
test('get charactersListImg', async () => {
  const characterImg = await screen.findByRole('img');
  expect(characterImg).toBeInTheDocument();
});
//esribimos el test para comprobar que sale por pantalla el nombre de todos los personajes

test('get charactersListName', async () => {
  const characterName = await screen.findByText(/Rick Sanchez/i);
  expect(characterName).toBeInTheDocument();
});



