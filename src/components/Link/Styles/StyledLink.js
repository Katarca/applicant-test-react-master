import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledNavBar } from "../../Navbar/Styles/StyledNavbar";

export const StyledLink = styled(Link)`
  text-decoration: none;
  ${StyledNavBar} & {
    &:first-child {
      margin-left: 10px;
      margin-right: auto;
    }
    &:last-child {
      width: 45px;
      height: 45px;
      margin-left: auto;
      margin-right: 10px;
    }
  }
`;
