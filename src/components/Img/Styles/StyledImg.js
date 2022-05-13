import styled from "styled-components";
import { StyledBookCard } from "../../BookCard/Styles/StyledBookCard";
import { StyledNavBar } from "../../Navbar/Styles/StyledNavbar";

export const StyledImg = styled.img`
  ${StyledNavBar} & {
    width: 100%;
    height: 100%;
  }
  ${StyledBookCard} & {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
`;
