import React from "react";
import BookshelfManager from "./book-shelf-manager";
import { update, search } from "../BooksAPI";

const Book = (props) => {
  const updater = (value) => {
    update(props.id, value).then((response) => {
      console.log(response);
      props.update(response);
    });
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${props.imageUrl})`,
            }}
          ></div>
          <BookshelfManager change={updater} option={props.option} />
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.auth}</div>
      </div>
    </li>
  );
};

export default Book;
