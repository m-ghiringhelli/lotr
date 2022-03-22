import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';
import Filter from '../../components/Filter/Filter';
import './Characters.css';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [race, setRace] = useState('All');
  const [query, setQuery] = useState('');
  const [queryText, setQueryText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCharacters(race, query);
        setCharacters(resp);
      } catch (e) {
        setErrorMessage('dangit broke');
      }
    };
    fetchData();
  }, [race, query]);

  return (
    <div>
      <p>{errorMessage}</p>
      <div className='filter'>
        <Filter {...{ race, setRace, query, setQuery, queryText, setQueryText }}/>
      </div>
      <div className='character-container'>
        {characters.map((character) => (
          <div className='character' key={character.id}>
            <h3>{character.name}</h3>
            <div className='dates'>
              <span>born: {character.birth}</span>
              <span>died: {character.death}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
