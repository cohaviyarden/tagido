import { useEffect, useState } from "react";
import ItemResult from "../../components/Item/ItemResult/ItemResult";
import { InputContainer } from "../../components/Item/style";
import useHttp from "../../hooks/useHttp";
import { ItemType } from "../../types";
import BasePage from "../BasePage";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const [items, setItems] = useState<any[]>([]);
  const [voterName, setVoterName] = useState<string>("");
  const navigate = useNavigate();
  const {
    isLoading: isLoadingItems,
    error: isErrorItems,
    sendRequest: getItemsToVoting,
  } = useHttp();

  const { isLoading, error, sendRequest: votingRequest } = useHttp();

  useEffect(() => {
    const transformItems = (data: any) => {
      data.products.forEach((item: ItemType) => {
        item.comment = "";
        item.vote = 0;
      });
      setItems(data.products);
    };
    getItemsToVoting(
      {
        //${params.id}
        url: `https://initvoting.azurewebsites.net/api/initvoting?id=73WakrfVbNJBaAmhQtEeDv`,
      },
      transformItems
    );
    return () => {
      setItems([]);
    };
  }, [getItemsToVoting]);

  const onSendVoting = async () => {
    !voterName && alert("You must enter name");
    const responseDate = (data: any) => {
      data && alert("Thank for your voting!");
      navigate("/votingPage");
    };
    voterName &&
      items.length &&
      votingRequest(
        {
          url: "https://initvoting.azurewebsites.net/api/voting",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: { products: items, voterName },
        },
        responseDate
      );
  };
  const addVotingValueToItem = (item: ItemType, value: Number) => {
    const itemFound = items.find((el) => el === item);
    itemFound.vote = value;
  };
  const addCommentToItem = (item: ItemType, comment: string) => {
    const itemFound = items.find((el) => el === item);
    itemFound.comment = comment;
  };

  const valueChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setVoterName(e.currentTarget.value);
  };

  return (
    <BasePage>
      <BasePage.Header>
        <BasePage.Title />
        <BasePage.Subtitle>Rate my shopping bag</BasePage.Subtitle>
        <InputContainer>
          <p>Enter your name</p>
          <input type="text" value={voterName} onChange={valueChangeHandler} />
        </InputContainer>
      </BasePage.Header>
      <BasePage.Body>
        {isErrorItems ? (
          <p>Request failed!</p>
        ) : isLoadingItems ? (
          <p>is loading... </p>
        ) : items ? (
          items.map((item: ItemType) => {
            return (
              <ItemResult
                key={item["item-id"]}
                image={item["image-url"]}
                title={item.name}
                price={item.price}
                onAddVotingValue={(value: number) =>
                  addVotingValueToItem(item, value)
                }
                onAddComment={(comment: string) =>
                  addCommentToItem(item, comment)
                }
              />
            );
          })
        ) : (
          <p>No items found!</p>
        )}
      </BasePage.Body>
      <BasePage.Footer>
        <BasePage.Button onClick={onSendVoting}>Done!</BasePage.Button>
      </BasePage.Footer>
    </BasePage>
  );
};
export default ResultsPage;
