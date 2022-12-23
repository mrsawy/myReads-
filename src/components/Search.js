import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  update, search } from "../BooksAPI";
import Book from "./book";

const Search = () => {
  const [searchInputState, setSearchInputState] = useState(``);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    search(searchInputState).then((results) => {
      (results && setBooks(results));
    });
    return () => {
      setBooks([]);
    };
  }, [searchInputState]);

  const changeInputHandler = (e) => {
    setSearchInputState(e.target.value);
  };

  //--------------
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchInputState}
            onChange={changeInputHandler}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <Book
                key={book.id}
                id={book.id}
                imageUrl={book.imageLinks.smallThumbnail}
                title={book.title}
                auth={book.authors}
               option={book.shelf}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Search;
