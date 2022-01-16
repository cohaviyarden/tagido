import { useEffect, useState } from "react";
import { Vote } from "../../../types";
import BaseItem from "../BaseItem";
import { HeaderItemResult } from "../ItemResult/style";
import { HeaderItemInit } from "../style";
import { BodyContainer, Border, CommentItem, CommentsContainer, Row, Square, SumOfVotes } from "./style";

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
      <BaseItem.Body>
      <HeaderItemResult>
        <BaseItem.Title {...props} />
        <BaseItem.Price {...props} />
      </HeaderItemResult>
      <BodyContainer>
        <SumOfVotes>{sumOfVotes} votes</SumOfVotes>
        <CommentsContainer>
          <Border />
          {props.votes.map((itemVote, index) => {
            return (
            <Row>
              <Square />
              <CommentItem key={index}>{itemVote.comment}</CommentItem>
            </Row>
            );
          })}
        </CommentsContainer>
      </BodyContainer>
      </BaseItem.Body>
    </BaseItem>
  );
};
export default ItemVote;
