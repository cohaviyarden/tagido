import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Item from "../../components/Item/Item";
import useHttp from "../../hooks/useHttp";
import { useParams } from "react-router-dom";
import "./style";
import { Header, Footer, ItemsContainer, LayoutContainer } from "./style";

interface Item {
  [`item-id`]: string;
  [`image-url`]: string;
  name: string;
  price: string;
}
const InitCartPage = () => {
  const params = useParams();
  const [items, setItems] = useState<Item[]>([]);
  const [votingList, setVotingList] = useState<Item[]>([]);

  const {
    isLoading: isLoadingItemsFromCart,
    error: errorItemsFromCart,
    sendRequest: getItemsFromCart,
  } = useHttp();

  useEffect(() => {
    const transformItems = (data: any) => {
      setItems(data.products);
    }
    getItemsFromCart({
      url:`https://initvoting.azurewebsites.net/api/initvote?id=${params.id}`},transformItems);
      
  }, [getItemsFromCart]);

  const {
    isLoading: isLoadingSendVoting,
    error: errorSendVoting,
    sendRequest: sendVotingRequest,
  } = useHttp();

  const onAddItemToVotingList = (item: Item) => {
    setVotingList((votingList) => [...votingList, item]);
  };
  const onAskFriends = async () => {
    votingList.map((item) => {
      sendVotingRequest({
        url: "https://initvoting.azurewebsites.net/api/startvoting",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { item },
      });
    });
  };
  return (
    <LayoutContainer>
      <Header>
        <p>Tagido</p>
        <p>Choose Items to share</p>
      </Header>
      <ItemsContainer>
        {items &&
          items.map((item: Item) => {
            <Item
              key={item["item-id"]}
              image={item["image-url"]}
              title={item.name}
              price={item.price}
              button={{
                onClick: () => {
                  onAddItemToVotingList(item);
                },
              }}
            />;
          })}
      </ItemsContainer>
      <Footer>
        <Button onClick={onAskFriends}>Ask your friends</Button>
      </Footer>
    </LayoutContainer>
  );
};
export default InitCartPage;
function setVotingList(arg0: (votingList: any) => any[]) {
  throw new Error("Function not implemented.");
}

