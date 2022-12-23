import React ,{createContext} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import Search from "./components/Search"
import NotFound from "./components/not-found"


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<NotFound />} /> 
   </Routes>
    </BrowserRouter>
,
  document.getElementById("root")
);
