import React, { useContext } from "react";
import {
  AmountContainer,
  BookRow,
  CartList,
  EmptyCartContainer,
  MainRow,
} from "../../page-style/StyledApp";
import Button from "../Button/Button";
import CartContext from "../../helpers/CartContext";
import Link from "../Link/Link";
import { BodyText } from "../typo/BodyText";

const Cart = ({ removeItem }) => {
  const cart = useContext(CartContext);
  const totalPrice = cart.reduce((a, b) => a + b.quantity * b.priceInCZK, 0);

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCartContainer>
          <BodyText>
            Your cart is empty return to <Link to="/">shop</Link>
          </BodyText>
        </EmptyCartContainer>
      ) : (
        <CartList>
          <MainRow>
            <BodyText className="name">Name</BodyText>
            <BodyText className="amount">Amount</BodyText>
            <BodyText className="price">Price</BodyText>
          </MainRow>
          {cart.map((item) => (
            <BookRow key={item.id}>
              <BodyText className="name">{item.name}</BodyText>
              <AmountContainer>
                <BodyText className="amount-main">{item.quantity}</BodyText>
                <Button onClick={() => removeItem(item)}>
                  <BodyText>Remove</BodyText>
                </Button>
              </AmountContainer>
              <BodyText className="price">
                {item.quantity * item.priceInCZK} CZK
              </BodyText>
            </BookRow>
          ))}
          <MainRow>
            <BodyText className="name">Total</BodyText>
            <BodyText className="price">{totalPrice} CZK</BodyText>
          </MainRow>
        </CartList>
      )}
    </>
  );
};

export default Cart;
