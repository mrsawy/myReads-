import React ,{createContext, useContext} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import Search from "./components/Search"
import NotFound from "./components/not-found"
import {update} from "./BooksAPI";

// update(`1`, `v`).then((response) => {
  

  
// });

ReactDOM.render(
  // <shelfContext.Provider value={con} >
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App  />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<NotFound />} /> 
   </Routes>
    </BrowserRouter>
// </shelfContext.Provider>
,
  document.getElementById("root")
);

//export {shelfContext}
// const shelfContext = createContext({}) ;
// let con ;
// const shelf =(input) =>{
//  input = con ;
// }




