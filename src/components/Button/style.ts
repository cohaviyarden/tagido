import styled from "styled-components";
import { COLORS } from "../../theme";


export const ButtonStyled = styled.button`
  height: 36px;
  width: 200px;
  background: ${COLORS.color_grey};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  
  &:hover {
    background: lightgray;
  }
`;
