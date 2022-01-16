import styled from "styled-components";


export const ButtonStyled = styled.button`
  height: 36px;
  width: 200px;
  background: grey;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  &:hover {
    background: lightgray;
  }
`;
export const Label = styled.p`
  text-align: center;
  white-space: pre;
  text-transform: uppercase;
  color: white;
  font-size: 14px;
  letter-spacing: 0.25px;
  padding-right: 7px;
`;

