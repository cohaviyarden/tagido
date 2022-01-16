import checkIcon from "../../../assets/icons/check.svg";
import { ButtonProps } from "../../Button/Button";
import BaseItem from "../BaseItem";
import { HeaderItemInit, Icon } from "../style";
import { ButtonItem } from "./style";

export interface ItemProps {
  image: string;
  title: string;
  price: string;
  button: ButtonProps;
}
const ItemInit = (props: ItemProps) => {
  return (
    <BaseItem>
      <BaseItem.Image {...props} />
      <HeaderItemInit>
        <BaseItem.Title {...props} />
        <BaseItem.Price {...props} />
      </HeaderItemInit>
      <ButtonItem {...props.button}>
        <Icon src={checkIcon} />
      </ButtonItem>
    </BaseItem>
  );
};
export default ItemInit;
