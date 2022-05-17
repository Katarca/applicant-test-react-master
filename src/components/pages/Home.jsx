import React from "react";
import { BookList } from "../../page-style/StyledApp";
import BookCard from "../BookCard/BookCard";

const Home = ({ products, addToCart }) => {
  return (
    <BookList>
      {products.map((product) => (
        <BookCard
          key={product.id}
          product={product}
          imgPath={require("../../assets/" + product.productCharacter + ".jpg")}
          addToCart={addToCart}
        />
      ))}
    </BookList>
  );
};

export default Home;
