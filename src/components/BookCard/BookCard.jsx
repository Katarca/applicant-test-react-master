import React from "react";
import Img from "../Img/Img";
import { Header } from "../typo/Header";
import { BodyText } from "../typo/BodyText";
import { AddSection, StyledBookCard } from "./Styles/StyledBookCard";
import Input from "../Input/Input";
import Button from "../Button/Button";

const BookCard = ({ bookObj, imgPath }) => {
  return (
    <StyledBookCard>
      <Img src={imgPath} />
      <Header>{bookObj.name}</Header>
      <BodyText className="book-description">{bookObj.description}</BodyText>
      {bookObj.inStock <= 5 ? (
        <BodyText className="book-price">
          {bookObj.priceInCZK} CZK ({bookObj.inStock} in stock)
        </BodyText>
      ) : (
        <BodyText className="book-price">
          {bookObj.priceInCZK} CZK (5+ in stock)
        </BodyText>
      )}
      {bookObj.inStock > 0 ? (
        <AddSection>
          <Input />
          <Button onClick={() => {}}>
            <BodyText>Add to cart</BodyText>
          </Button>
        </AddSection>
      ) : (
        <BodyText className="not-available">Not available</BodyText>
      )}
    </StyledBookCard>
  );
};

export default BookCard;
