import styled from "styled-components";
import { CartList, EmptyCartContainer } from "../../page-style/StyledApp";
import { StyledBookCard } from "../BookCard/Styles/StyledBookCard";

export const BodyText = styled.p`
  font-size: 1.5rem;
  font-family: "Times New Roman", Times, serif;
  ${StyledBookCard} & {
    &.book-description {
      width: 100%;
      padding: 5px;
    }
    &.book-price {
      width: 45%;
      padding: 5px;
    }
    &.not-available {
      margin-left: auto;
      padding: 5px;
      color: red;
    }
  }
  ${EmptyCartContainer} & {
    font-size: 2rem;
  }
  ${CartList} & {
    &.name {
      width: 50%;
    }
    &.amount {
      width: 30%;
      text-align: center;
    }
    &.price {
      width: 20%;
      text-align: right;
    }
  }
`;
