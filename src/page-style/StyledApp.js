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

export const CartList = styled.div`
  min-height: 0;
  min-width: 0;

  flex: 1;
  display: flex;
  flex-direction: column;

  font-size: 25px;
`;

export const BookRow = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 10px;
  background-color: aliceblue;
  border-bottom: 1px solid lightgrey;
`;

export const MainRow = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 10px;
`;

export const AmountContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const EmptyCartContainer = styled.div`
  padding: 10px;
  width: 100%;
  height: fit-content;
  text-align: center;
`;
