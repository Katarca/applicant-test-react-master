import React from "react";
import { StyledLink } from "./Styles/StyledLink";

const Link = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Link;
