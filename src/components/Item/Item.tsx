import checkIcon from "../../assets/icons/check.svg";
import { ButtonProps } from "../Button/Button";
import "./style";
import {
  ButtonItem,
  Icon,
  ImageItem,
  ItemContainer,
  ItemDetail,
  Price,
  Title,
} from "./style";

export interface ItemProps {
  image: string;
  title: string;
  price: string;
  button: ButtonProps;
}
const Item = (props: ItemProps) => {
  return (
    <ItemContainer>
      <ImageItem src={props.image} />
      <ItemDetail>
        <Title>{props.title}</Title>
        <Price>{props.price}</Price>
      </ItemDetail>
      <ButtonItem {...props.button}>
        <Icon src={checkIcon} />
      </ButtonItem>
    </ItemContainer>
  );
};
export default Item;
