import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
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
`;
