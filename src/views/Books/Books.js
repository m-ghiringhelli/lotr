import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../../services/books';
import './Books.css';

export default function Books() {
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchBooks();
        setBooks(resp);
      } catch (e) {
        setErrorMessage('whoops!');
      }
    };
    fetchData();
  }, []);

  console.log(books);

  return (
    <div>
      <p>{errorMessage}</p>
      <div className='books-container'>
        {books.map((book) => (
          <div className='book' key={book.id}>{book.title}</div>
        ))}
      </div>
    </div>
  );
}
