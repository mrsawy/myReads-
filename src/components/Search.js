import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { update, search } from "../BooksAPI";
import Book from "./book";
//-----------
const Search = () => {
  //----------------
  const [searchInputState, setSearchInputState] = useState(``);
  const [books, setBooks] = useState([]);
  const [shelfs, setShelfs] = useState({});

  useEffect(() => {
    const ser = setTimeout(() => {
      update(`11`, `11`).then((shelfs) => {
        setShelfs(shelfs);
        console.log(shelfs.currentlyReading);

        //-------------------
      });
      search(searchInputState, 30).then((results) => {
        results && setBooks(results);
      }, 100);
    });
    return () => {
      setBooks([]);
      clearInterval(ser);
    };
  }, [searchInputState]);

  const changeInputHandler = (e) => {
    setSearchInputState(e.target.value);
    console.log(books);
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
          {books.length > 0 &&
            books.map((book) => {
              return (
                <Book
                  key={book.id}
                  id={book.id}
                  imageUrl={
                    book.imageLinks ? book.imageLinks.smallThumbnail : ``
                  }
                  title={book.title}
                  auth={book.authors ? book.authors : ``}
                  option={
                    shelfs.currentlyReading.includes(book.id)
                      ? "currentlyReading"
                      : shelfs.wantToRead.includes(book.id)
                      ? "wantToRead"
                      : shelfs.read.includes(book.id)
                      ? `read`
                      : `none`
                  }
                  update={(input) => {}}
                />
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default Search;
