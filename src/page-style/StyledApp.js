import styled from "styled-components";

export const StyledApp = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainArea = styled.div`
  min-width: 0;
  min-height: 0;
  width: min(1000px, 100%);

  flex: 1;
  display: flex;
`;

export const BookList = styled.div`
  min-height: 0;
  min-width: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1;
  row-gap: 15px;

  padding: 15px;
  overflow-y: scroll;
`;
