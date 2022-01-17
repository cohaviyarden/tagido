import { useEffect, useState } from "react";
import ItemInit from "../../components/Item/ItemInit/ItemInit";
import useHttp from "../../hooks/useHttp";
import { useParams } from "react-router-dom";
import BasePage from "../BasePage";
import { ItemType } from "../../types";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const InitCartPage = () => {
  const params = useParams();
  const [items, setItems] = useState<ItemType[]>([]);
  const [votingList, setVotingList] = useState<ItemType[]>([]);
  const navigate = useNavigate();

  const {
    isLoading: isLoadingItems,
    error: isErrorItems,
    sendRequest: getItemsFromCart,
  } = useHttp();

  const { sendRequest: sendItemsToVote } = useHttp();

  const content = isErrorItems ? (
    "Request failed!"
  ) : isLoadingItems ? (
    <Loader loading={true} message={"Loading items..."} />
  ) : !items ? (
    "No items found!"
  ) : (
    items.map((item: ItemType) => {
      return (
        <ItemInit
          key={item["item-id"]}
          image={item["image-url"]}
          title={item.name}
          price={item.price}
          button={{
            addOrRemove: () => {
              addOrRemoveItem(item);
            },
          }}
        />
      );
    })
  );

  useEffect(() => {
    const transformItems = (data: any) => {
      setItems(data.products);
    };
    getItemsFromCart(
      {
        //${params.id}
        url: `https://initvoting.azurewebsites.net/api/initvote?id=122323224`,
      },
      transformItems
    );
    return () => {
      setItems([]);
    };
  }, [getItemsFromCart]);

  const onAskFriends = async () => {
    if (!votingList.length) {
      alert("You need to add items");
    }
    const responseDate = (data: any) => {
      data && alert("Your items are on the way to your friends!");
      navigate("/resultsPage");
    };
    votingList.length &&
      sendItemsToVote(
        {
          url: "https://initvoting.azurewebsites.net/api/startvoting",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: { products: votingList },
        },
        responseDate
      );
  };

  const addOrRemoveItem = (item: ItemType) => {
    const index = votingList.indexOf(item);
    if (index > -1) {
      votingList.splice(index, 1);
    } else {
      setVotingList((votingList) => [...votingList, item]);
    }
  };
  return (
    <BasePage>
      <BasePage.Header>
        <BasePage.Title />
        <BasePage.Subtitle>Choose Items to share</BasePage.Subtitle>
      </BasePage.Header>
      <BasePage.Body>{content}</BasePage.Body>
      <BasePage.Footer>
        <BasePage.Button onClick={onAskFriends}>
          Ask your friends
        </BasePage.Button>
      </BasePage.Footer>
    </BasePage>
  );
};
export default InitCartPage;
