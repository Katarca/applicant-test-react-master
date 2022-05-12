import React from "react";
import Img from "../Img/Img";
import Link from "../Link/Link";
import { Header } from "../typo/Header";
import { StyledNavBar } from "./Styles/StyledNavbar";
import cart from "../../assets/cart.png";

const Navbar = () => {
  return (
    <StyledNavBar>
      <Link to="/">
        <Header>Books</Header>
      </Link>
      <Link to="/">
        <Header>Awesome book store</Header>
      </Link>
      <Link to="/cart">
        <Img src={cart} />
      </Link>
    </StyledNavBar>
  );
};

export default Navbar;
