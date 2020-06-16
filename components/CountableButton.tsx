import React from "react";
import styled from "styled-components/native";
import { COLOR } from "../utils/constants";

type Props = {
  count: number;
  onAdd: () => void;
  onMinus: () => void;
};

const CountableButtonRoot = styled.View`
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  align-items: flex-start;
  height: 28px;
  background: ${COLOR.LIGHT_GREY};
  border: 1px solid ${COLOR.PRIMARY};
  width: 70px;
`;

const CountText = styled.Text`
  font-weight: 500;
  color: ${COLOR.GREY};
  font-size: 12px;
  letter-spacing: 1px;
`;
const CountTextContainer = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20px;
  padding:5px;
`;

const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLOR.LIGHT_GREY};
  height: 26px;
  width: 20px;
  border-radius: 2px;
  color: black;
`;

const ButtonText = styled.Text`
  color: ${COLOR.GREY};
`;

const CountableButton: React.FC<Props> = ({ count, onAdd, onMinus }: Props) => (
  <CountableButtonRoot>
    <Button onPress={onAdd}>
      <ButtonText>+</ButtonText>
    </Button>
    <CountTextContainer>
      <CountText>{count}</CountText>
    </CountTextContainer>
    <Button onPress={onMinus}>
      <ButtonText>-</ButtonText>
    </Button>
  </CountableButtonRoot>
);

export default CountableButton;
