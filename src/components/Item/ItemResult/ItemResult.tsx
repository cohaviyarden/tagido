import BaseItem from "../BaseItem";
import cartIcon from "../../../assets/icons/cart.svg";
import pencilIcon from "../../../assets/icons/pencil.svg";
import minusIcon from "../../../assets/icons/minus.svg";
import plusIcon from "../../../assets/icons/plus.svg";
import { HeaderItemResult, Icon } from "./style";
import {
  AddComment,
  IconButton,
  Input,
  InputContainer,
  InputValue,
  Voting,
} from "../style";
import { useState } from "react";

export interface ItemProps {
  image: string;
  title: string;
  price: string;
  onAddVotingValue: (value: number) => void;
  onAddComment: (comment: string) => void;
}
const ItemResult = (props: ItemProps) => {
  const [commentValue, setCommentValue] = useState("");
  const [votingValue, setVotingValue] = useState(0);

  const valueChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setCommentValue(e.currentTarget.value);
    props.onAddComment(commentValue);
  };
  const onPlusVoting = () => {
    if (votingValue < 10) {
      setVotingValue(votingValue + 1);
      props.onAddVotingValue(votingValue + 1);
    }
  };
  const onMinusVoting = () => {
    if (votingValue > 0) {
      setVotingValue(votingValue - 1);
      props.onAddVotingValue(votingValue - 1);
    }
  };
  return (
    <BaseItem>
      <BaseItem.Image {...props} />
      <HeaderItemResult>
        <BaseItem.Title {...props} />
        <BaseItem.Price {...props} />
        <Icon src={cartIcon} />
      </HeaderItemResult>
      <Voting>
        <IconButton onClick={onPlusVoting} src={plusIcon} />
        <InputValue
          type="number"
          value={votingValue}
          readOnly
          min="0"
          max="10"
        />
        <IconButton onClick={onMinusVoting} src={minusIcon} />
      </Voting>
      <AddComment>
        <p>Add a comment</p>
        <InputContainer>
          <Input
            type="text"
            value={commentValue}
            onChange={valueChangeHandler}
          ></Input>
          <Icon src={pencilIcon} />
        </InputContainer>
      </AddComment>
    </BaseItem>
  );
};
export default ItemResult;
