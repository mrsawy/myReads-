import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { update, search } from "../BooksAPI";
import Book from "./book";
import { shelfContext } from "../index";

let finalRes;
const Search = () => {
  //     const shelfContext = useContext(shelfContext)
  //     console.log(shelfContext);
  const [searchInputState, setSearchInputState] = useState(``);
  const [books, setBooks] = useState([]);
  const [shelfs, setShelfs] = useState({});

  useEffect(() => {
    const ser = setTimeout(() => {
      update(`11`, `11`).then((shelfs) => {

        setShelfs(shelfs);
console.log(        shelfs.currentlyReading
)        //console.log(finalSh);
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
                    //['nggnmAEACAAJ', 'sJf1vQAACAAJ', '1w4fAwAAQBAJ', '1wy49i-gQjIC'].includes(book.id)
                    shelfs.currentlyReading.includes(book.id)
                      ? "currentlyReading"
                      : shelfs.wantToRead.includes(book.id)
                       ? "wantToRead"
                       : shelfs.read.includes(book.id)
                        ? `read`
                        :`none`

                    //    shelfs.wantsToRead.includes(book.id) ?
                    //     `wantToRead`
                    //    :`none`
                    //shelfs.wantsToRead.includes(book.id)
                    //    ? "wantToRead"
                    //   : "none"
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
