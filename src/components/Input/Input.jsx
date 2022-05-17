import React from "react";
import { StyledInput } from "./Styles/StyledInput";

const Input = ({ type, placeholder, min, max, onChange, value, disabled }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      min={min}
      max={max}
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
  );
};

export default Input;
