import React from "react";
import { View, StyleSheet } from "react-native";
import { COLOR } from "../../utils/constants";

type Props = {
  children: JSX.Element;
};

const Card: React.FC<Props> = (props: Props) => {
  return <View style={style.root}>{props.children}</View>;
};

const style = StyleSheet.create({
  root: {
    display: "flex",
    height: 200,
    width: 400,
    backgroundColor: COLOR.WHITE,
    borderWidth: 0,
    paddingTop: 5,
    paddingLeft: 10,
    shadowColor: COLOR.GREY,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 10,
    shadowRadius: 16.0,

    elevation: 24,
  },
});

export default Card;
