import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AllCharacters.css'

function AllCharacters() {
    const [ characters, setCharacters] = useState([]);

    useEffect(() =>{
        fetch("https://rickandmortyapi.com/api/character")
        .then((res)=>res.json())
        .then((data)=>setCharacters(data.results))
    },[])

  return (
       <>
       {characters.map((character)=>{
       return(
            <div key={character.id} className="App">               
                <Link to={`/character/${character.id}`}>
                    <img src={character.image} alt={character.name} />
                </Link>
                <p>{character.name}</p>
            </div>
       )
       })}
       </> 
    )
}

export default AllCharacters