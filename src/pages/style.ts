import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  border: 1px solid black;
  width: 480px;
  height: 100vh;
  margin: 10%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  border-color: black;
`;
export const Body = styled.div`
  height: 70%;
`;
export const Header = styled.div`
  font-size: 18px;
  line-height: 32px;
  font-weight: bold;
  margin: 0;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div``;
export const Subtitle = styled.div``;
export const Footer = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
`;
export const SquareButton=styled.button<Boolean>`
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
`