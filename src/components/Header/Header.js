import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <h1>learn of the rings</h1>
      <ul>
        <li>
          <NavLink className='link' exact to='/'>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='/books'>
            BOOKS
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='/characters'>
            CHARACTERS
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='/films'>
            FILMS
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
