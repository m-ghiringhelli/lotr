import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';
import Filter from '../../components/Filter/Filter';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [race, setRace] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCharacters('All', 'o');
        setCharacters(resp);
      } catch (e) {
        setErrorMessage('dangit broke');
      }
    };
    fetchData();
  }, []);

  console.log(characters);

  return (
    <div>
      <Filter {...{ race, setRace, query, setQuery }}/>
    </div>
  );
}
