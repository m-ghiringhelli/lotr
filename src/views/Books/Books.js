import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../../services/books';

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
      <div>
        {books.map((book) => (
          <p key={book.id}>{book.title}</p>
        ))}
      </div>
    </div>
  );
}
