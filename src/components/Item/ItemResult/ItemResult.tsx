import BaseItem from "../BaseItem";
import cartIcon from "../../../assets/icons/cart.svg";
import pencilIcon from "../../../assets/icons/pencil.svg";
import minusIcon from "../../../assets/icons/minus.svg";
import plusIcon from "../../../assets/icons/plus.svg";
import {
  HeaderItemResult,
  Icon,
  AddComment,
  Voting,
  InputValue,
  InputContainer,
} from "./style";
import { IconButton } from "../style";
import { useState } from "react";
import { Input } from "../../../pages/ResultsPage/style";

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
      <BaseItem.Body>
        <HeaderItemResult>
          <BaseItem.Title {...props} />
          <BaseItem.Price {...props} />
          <Icon src={cartIcon} />
        </HeaderItemResult>
        <Voting>
          <IconButton onClick={onMinusVoting} src={minusIcon} />
          <InputValue
            type="number"
            value={votingValue}
            readOnly
            min="0"
            max="10"
          />
          <IconButton onClick={onPlusVoting} src={plusIcon} />
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
      </BaseItem.Body>
    </BaseItem>
  );
};
export default ItemResult;
