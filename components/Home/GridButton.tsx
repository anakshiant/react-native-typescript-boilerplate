import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLOR } from "../../utils/constants";
import { Button, Icon } from "native-base";
import { useDispatch, GridType } from "../../store/types";

type Props = { name: GridType; active: boolean };

const GridButton: React.FC<Props> = ({ name, active }: Props) => {
  const dispatch = useDispatch();

  const onPressHandler = () =>
    dispatch({ type: "SET_GRID_TYPE", payload: name });
  return (
    <Button
      iconLeft
      transparent
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: 70,
        backgroundColor: active ? COLOR.SELECTED : undefined,
      }}
      onPress={onPressHandler}
    >
      <Icon name="grid" style={style.whiteColor} />
      <Text style={style.whiteColor}>{name}</Text>
    </Button>
  );
};

export default GridButton;

const style = StyleSheet.create({
  whiteColor: {
    color: COLOR.WHITE,
  },
});
