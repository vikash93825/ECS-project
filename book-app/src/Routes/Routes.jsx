import React from "react";
import { Route } from "react-router-dom";
import { BookItem } from "../Components/Books/BookItem";
import { BookList } from "../Components/Books/BookList";
import { Cart } from "../Components/Books/Cart";
import { Navbar } from "../Components/Navbar/Navbar";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Route path="/" exact render={() => <BookList />} />
      <Route path="/book/:bookId" component={BookItem} />
      <Route path="/cart" render={() => <Cart />} />
    </div>
  );
};

export { Routes };
