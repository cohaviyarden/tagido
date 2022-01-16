import styled from "styled-components";
import { COLORS } from "../theme";

export const Container = styled.div`
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border: 1px solid ${COLORS.color_light_grey};
  width: 480px;
  height: 100vh;
  margin: 10%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
export const Body = styled.div`
  height: 70%;
`;
export const Header = styled.div`
  font-size: 18px;
  line-height: 32px;
  font-weight: bold;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  color: ${COLORS.color_pink};
  font-size: 28px;
  text-transform: uppercase;
  padding-bottom: 10px;
`;
export const Subtitle = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
`;
export const Footer = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const SquareButton = styled.button<Boolean>`
  height: 42px;
  width: 250px;
  background: ${COLORS.color_grey};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  font-size: 18px;
  &:hover {
    background: lightgray;
  }
`;
