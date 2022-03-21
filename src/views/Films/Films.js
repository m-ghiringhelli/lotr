import React, { useEffect, useState } from 'react';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [films, setFilms] = useState([]);
  const [errorMessage, setErrorMessage] = '';

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
      <div>
        {films.map((film) => (
          <p key={film.id}>{film.title}</p>
        ))}
      </div>
    </div>
  );
}
