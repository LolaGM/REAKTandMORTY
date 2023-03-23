import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCharacters from './components/AllCharacters';
import OneCharacter from './components/OneCharacter';
import rickMortyLogo from './rickMortyLogo.png';

function App() {
  return (
    <div className="App">
    <img src={rickMortyLogo} alt='Logo Rick and Morty' className='logo'/>
    <h1>Character List</h1>
       <BrowserRouter>
        <Routes>          
          <Route path='/' element={<AllCharacters/>}></Route>
          <Route path='character/:id' element={<OneCharacter/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
