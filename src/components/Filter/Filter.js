import React from 'react';

export default function Filter() {
  return (
    <div>
      <select>
        <option value="All">All</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Maiar">Maiar</option>
        <option value="Orc">Orc</option>
      </select>
      <input type='text'>
      </input>
      <button>
        Search
      </button>
    </div>
  );
}
