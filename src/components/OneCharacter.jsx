import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/OneCharacter.css'

function OneCharacter() {
    const param = useParams();

    const [ character, setCharacter] = useState([]);

    useEffect(() =>{
        fetch(`https://rickandmortyapi.com/api/character/${param.id}`)
        .then((res)=>res.json())
        .then((data)=>setCharacter(data))
    },[param.id])

  return (
    <>
        <div key={character.id} className="App">
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name}  className='profile'/>
            <h2>Species: {character.species}</h2>
            <h2>Gender: {character.gender}</h2>
            <h2>Status: {character.status}</h2>
            <Link to='/'><button className="basic-btn">Back to home</button></Link>
        </div>
    </>
  )
}

export default OneCharacter