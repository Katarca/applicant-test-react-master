import React, { useState, useContext } from "react";
import Img from "../Img/Img";
import { Header } from "../typo/Header";
import { BodyText } from "../typo/BodyText";
import { AddForm, StyledBookCard } from "./Styles/StyledBookCard";
import Input from "../Input/Input";
import Button from "../Button/Button";
import CartContext from "../../helpers/CartContext";

const BookCard = ({ product, imgPath, addToCart }) => {
  const [number, setNumber] = useState("");
  const cartItems = useContext(CartContext);

  const exist = cartItems.find((item) => item.id === product.id);

  const checkInStockLeft = () => {
    if (exist) {
      const inStockLeft = exist.inStock - exist.quantity;
      return inStockLeft;
    } else {
      return product.inStock;
    }
  };

  const checkMaxQuantity = () => {
    if (exist) {
      if (exist.quantity >= exist.inStock) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <StyledBookCard>
      <Img src={imgPath} />
      <Header>{product.name}</Header>
      <BodyText className="book-description">{product.description}</BodyText>
      {product.inStock <= 5 ? (
        <BodyText className="book-price">
          {product.priceInCZK} CZK ({product.inStock} in stock)
        </BodyText>
      ) : (
        <BodyText className="book-price">
          {product.priceInCZK} CZK (5+ in stock)
        </BodyText>
      )}
      {product.inStock > 0 ? (
        <AddForm
          onSubmit={(event) => addToCart(event, product, number, setNumber)}
        >
          <Input
            type="number"
            placeholder="0"
            min="1"
            max={checkInStockLeft(product, cartItems)}
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            disabled={checkMaxQuantity(product, cartItems)}
          />
          <Button type="submit" disabled={!number}>
            <BodyText>Add to cart</BodyText>
          </Button>
        </AddForm>
      ) : (
        <BodyText className="not-available">Not available</BodyText>
      )}
    </StyledBookCard>
  );
};

export default BookCard;
