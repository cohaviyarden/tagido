import styled from "styled-components";
import Button from "../Button/Button";

export const ItemContainer = styled.div`
  height: 30%;
  background: white;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;
export const ImageItem = styled.img`
  height: 100%;
  object-fit: cover;
`;
export const ItemDetail = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Title = styled.div``;
export const Price = styled.div``;
export const ButtonItem = styled(Button)`
  width: 40px;
  border-radius: 80%;
  text-align: center;
  
`;
export const Icon = styled.img`
  height: 17px;
`;