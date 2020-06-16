import React, { useState } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { useSelector, State, Dish } from "../store/types";
import DishRow from "../components/DishRow";
import { COLOR } from "../utils/constants";

const ContainerRoot = styled.View`
  display: flex;
  justify-content: center;
`;

const FloatingMenuButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLOR.PRIMARY};
  height: 28px;
  width: 20%;
  border-radius: 10px;
  margin-top: 20px;
`;

const FloatingButtonContainer = styled.View`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0px;
  align-self: center;
  width: 100%;
  height: 100px;
`;

const SectionContainer = styled.ScrollView`
  height: 100%;
  padding: 10px;
`;

const ButtonText = styled.Text`
  color: ${COLOR.WHITE};
`;

const INITIAL_ITEMS_COUNT = 2;

const Cart: React.FC = () => {
  const dishes = useSelector((state: State) => state.dishes);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const cartItems = useSelector((state: State) => Object.keys(state.cart));

  return (
    <ContainerRoot>
      <SectionContainer showsVerticalScrollIndicator={false}>
        <FlatList
          data={loadMore ? cartItems : cartItems.slice(0, INITIAL_ITEMS_COUNT)}
          renderItem={({ item }) => <DishRow dish={dishes[item]} />}
        />
      </SectionContainer>
      <FloatingButtonContainer>
        <FloatingMenuButton onPress={() => setLoadMore(true)}>
          <ButtonText>Load More</ButtonText>
        </FloatingMenuButton>
      </FloatingButtonContainer>
    </ContainerRoot>
  );
};

export default Cart;
