import React from "react";
import { StyledButton } from "./Styles/StyledButton";

const Button = ({ onClick, children, disabled, type }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
