import React from 'react';
import './Filter.css';

export default function Filter({ race, setRace, query, setQuery, queryText, setQueryText }) {
  return (
    <div className='filter'>
      <select className='selector' onChange={(e) => {
        setRace(e.target.value);
      }}>
        <option value="All">All</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Maiar">Maiar</option>
        <option value="Orc">Orc</option>
      </select>
      <input type='text' onChange={(e) => {setQueryText(e.target.value);}}>
      </input>
      <button onClick={(e) => {setQuery(queryText);}}>
        SEARCH
      </button>
    </div>
  );
}
