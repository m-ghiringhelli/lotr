import React, { useEffect, useState } from 'react';
import { fetchFilms } from '../../services/films';
import './Films.css';

export default function Films() {
  const [films, setFilms] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchFilms();
        setFilms(resp);
      } catch (e) {
        setErrorMessage('dangit broke');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>{errorMessage}</p>
      <div className='films-container'>
        {films.map((film) => (
          <div className='film' key={film.id}>
            <img src={`./films/${(film.title).split(' ').join('-').toLowerCase()}.jpeg`} />
            <p>{film.title.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
