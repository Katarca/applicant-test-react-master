import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";
import { StyledBookCard } from "../BookCard/Styles/StyledBookCard";
import { StyledNavBar } from "../Navbar/Styles/StyledNavbar";

export const Header = styled.h2`
  font-weight: normal;
  ${StyledNavBar} & {
    font-size: 3rem;
    ${breakpoint.phone} {
      font-size: 2rem;
    }
  }
  ${StyledBookCard} & {
    width: 100%;

    margin: 5px 0;

    font-size: 30px;
    text-align: center;
  }
`;
