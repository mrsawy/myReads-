import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Book from "./components/book";
import BookShelf from "./components/book-shelf";
import { getAll } from "./BooksAPI";

const App = () => {
  //----------
  const update = (input) => {
    setChange(input);
  };
  //-------------
  const [change, setChange] = useState({});
  //-----------
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [wantsToReadBooks, setWantsToReadBooks] = useState([]);
  useEffect(() => {
    (async () => {
      //---fetching all the books
      const books = await getAll();
      books.forEach((b) => console.log(b.shelf));
      //-- setting the currently reading books
      let currentlyReadingBooks_ = books.filter(
        (b) => b.shelf === `currentlyReading`
      );
      setCurrentlyReadingBooks(currentlyReadingBooks_);
      //-- setting the read books
      let readBooks_ = books.filter((b) => b.shelf === `read`);
      setReadBooks(readBooks_);
      //--setting the wants to read book shelf
      let wantsToReadBooks_ = books.filter((b) => b.shelf === `wantToRead`);
      setWantsToReadBooks(wantsToReadBooks_);

      console.log(`|======= data fetched =======|`);
    })();
  }, [change]);

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelfTitle="currently reading">
              {currentlyReadingBooks.map((book) => {
                return (
                  <Book
                    key={book.id}
                    id={book.id}
                    imageUrl={book.imageLinks.smallThumbnail}
                    title={book.title}
                    auth={book.authors}
                    update={update}
                    option={book.shelf}
                  />
                );
              })}
            </BookShelf>
            <BookShelf shelfTitle="read">
              {readBooks.map((book) => {
                return (
                  <Book
                    key={book.id}
                    imageUrl={book.imageLinks.smallThumbnail}
                    title={book.title}
                    auth={book.authors}
                    option={book.shelf}
                    update={update}

                    id={book.id}
                  ></Book>
                );
              })}
            </BookShelf>
            <BookShelf shelfTitle="want to read">
              {wantsToReadBooks.map((book) => {
                return (
                  <Book
                    id={book.id}
                    key={book.id}
                    imageUrl={book.imageLinks.smallThumbnail}
                    title={book.title}
                    auth={book.authors}
                    option={book.shelf}
                    update={update}

                  ></Book>
                );
              })}
            </BookShelf>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default App;
