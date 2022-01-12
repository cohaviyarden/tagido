import Button from "../../components/Button/Button";
import Item from "../../components/Item/Item";
import "./style";
import { Header, Footer, ItemsContainer, LayoutContainer } from "./style";

const InitCart = () => {
  return (
    <LayoutContainer>
      <Header></Header>
      <ItemsContainer>
        <Item />
      </ItemsContainer>
      <Footer>
        <Button />
      </Footer>
    </LayoutContainer>
  );
};
export default InitCart;
