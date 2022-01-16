import styled from "styled-components";
import { COLORS } from "../../theme";

export const Container = styled.div`
  height: 30%;
  background: white;
  border-bottom: 1px solid ${COLORS.color_grey};
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const Body = styled.div`
  width: 100%;
  height: 90%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ImageItem = styled.img`
  height: 90%;
  width: 150px;
  object-fit: cover;
`;
export const HeaderItemInit = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
`;
export const Title = styled.div`
  color: ${COLORS.color_grey};
`;
export const Price = styled.div`
  font-weight: bold;
  color: ${COLORS.color_grey};
`;

export const Icon = styled.img`
  height: 17px;
`;
export const IconButton = styled.img`
  height: 17px;
  cursor: pointer;
`;
