import { render, screen } from '@testing-library/react';
import App from './App';

/*
-Importamos la librería de REACT testing library /react
-la palabra test y entre paréntesis dos cosas: el nombre del test y la arrow function
-Dentro de arrow function metodo RENDER y qué renderiza APP (el archivo .jsx)
-Creamos constante con nombre descriptivo que contenga el método SCREEN (por pantalla) y que GET (ver espcificidad en la web de la librería de TESTING)
-Le psasamos entre paréntesis a esto dos cosas: la etiqeuta HTML y el nombre de esa IMG según su ALT
-Usaremos ahora el método EXPECT para 
-La estamos haciendo por ROLE y dentro le decimos que tipo de etiqueta HTML es: IMG
Y de esa imagen el name y el nombre que le pusimos en APP.jsx exactamente igual que en ALT
Le especificas con name
-
-Paras saber el comando de test que usar, mirar en package lock json
Para cada test usamos render pero con beforeEach lo quitamos de ambos y refactorizamos código muteando el render APP de los dos tests*/
beforeEach(()=>{
  render(<App />)

});

test('renders logo', () => {
  // render(<App />); 
  const logo = screen.getByRole('img', {name:'Logo Rick and Morty'});
  expect(logo).toBeInTheDocument();
});

test('renders title', () => {
  // render(<App />);
  const title = screen.getByText(/List/i);
  expect(title).toBeInTheDocument();
});
