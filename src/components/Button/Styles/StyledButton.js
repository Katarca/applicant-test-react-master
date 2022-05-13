import styled from "styled-components";
import { StyledBookCard } from "../../BookCard/Styles/StyledBookCard";

export const StyledButton = styled.button`
  ${StyledBookCard} & {
    width: 50%;
  }
`;
