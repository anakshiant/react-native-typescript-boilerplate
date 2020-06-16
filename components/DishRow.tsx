import React from "react";
import styled from "styled-components/native";
import { Dish, useDispatch, useSelector, State } from "../store/types";
import { COLOR } from "../utils/constants";
import CountableButton from "./CountableButton";

type Props = {
  dish: Dish;
};

const DishRowRoot = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 102px;
  padding-left: 10px;
`;

const DishInfoContainer = styled.View`
  height: 100%;
`;

const DishActionContainer = styled.View`
  height: 100%;
`;

const DishTitleText = styled.Text`
  font-weight: bold;
  color: ${COLOR.BLACK};
  font-size: 17px;
  letter-spacing: 1px;
`;

const DishInfoText = styled.Text`
  font-weight: 600;
  color: ${COLOR.GREY};
  font-size: 14px;
  letter-spacing: 1px;
  margin-top: 10px;
`;

const DishPriceText = styled.Text`
  font-weight: 600;
  color: ${COLOR.PRIMARY};
  font-size: 14px;
  margin-top: 10px;
`;

const AddButton = styled.Button`
  background: ${COLOR.PRIMARY};
  height: 15px;
  width: 100px;
  border-radius: 2px;
`;

const DishRow: React.FC<Props> = ({ dish }: Props) => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state: State) => state.cart[dish.id] || 0);

  const handleAddPress = () => {
    dispatch({ type: "CART_ITEM_ADD", dishId: dish.id });
  };

  const handleMinusPress = () => {
    dispatch({ type: "CART_ITEM_REMOVE", dishId: dish.id });
  };

  return (
    <DishRowRoot>
      <DishInfoContainer>
        <DishTitleText>{dish.name}</DishTitleText>
        <DishInfoText>{dish.info}</DishInfoText>
        <DishPriceText>{dish.price} €</DishPriceText>
      </DishInfoContainer>
      <DishActionContainer>
        {cartCount > 0 ? (
          <CountableButton
            count={cartCount}
            onAdd={handleAddPress}
            onMinus={handleMinusPress}
          />
        ) : (
          <AddButton
            title="Add"
            onPress={handleAddPress}
            color={COLOR.PRIMARY}
          />
        )}
      </DishActionContainer>
    </DishRowRoot>
  );
};
export default DishRow;
