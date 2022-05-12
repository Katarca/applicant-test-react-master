import styled from "styled-components";
import { StyledNavBar } from "../Navbar/Styles/StyledNavbar";

export const Header = styled.h2`
  ${StyledNavBar} & {
    font-size: 3rem;
    font-weight: normal;
  }
`;
