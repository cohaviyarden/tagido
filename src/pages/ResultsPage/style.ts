import styled from "styled-components";
import { COLORS } from "../../theme";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 15%;
  align-items: center;
`;
export const InputTitle = styled.div`
    font-size: 14px;
    font-weight: 400;
    padding-right: 10px;
`
export const Input = styled.input`
  outline: 0;
  border-width: 0 0 2px;
  border-color: ${COLORS.color_light_grey};
`;
