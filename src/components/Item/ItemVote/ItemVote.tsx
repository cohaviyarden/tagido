import { useEffect, useState } from "react";
import { Vote } from "../../../types";
import BaseItem from "../BaseItem";
import { HeaderItemInit } from "../style";
import { BodyContainer, CommentsContainer } from "./style";

export interface ItemProps {
  image: string;
  title: string;
  price: string;
  votes: Vote[];
}

const ItemVote = (props: ItemProps) => {
  const [sumOfVotes, setSumOfVotes] = useState<number>();
  let sum = 0;
  
  useEffect(() => {
    props.votes.forEach((voteItem) => {
      sum += voteItem.vote;
    });
    setSumOfVotes(sum);
  }, [props.votes]);
  
  return (
    <BaseItem>
      <BaseItem.Image {...props} />
      <HeaderItemInit>
        <BaseItem.Title {...props} />
        <BaseItem.Price {...props} />
      </HeaderItemInit>
      <BodyContainer>
        <p>{sumOfVotes} votes</p>
        <CommentsContainer>
          {props.votes.map((voteItem, index) => {
            return <p key={index}>{voteItem.comment}</p>;
          })}
        </CommentsContainer>
      </BodyContainer>
    </BaseItem>
  );
};
export default ItemVote;
