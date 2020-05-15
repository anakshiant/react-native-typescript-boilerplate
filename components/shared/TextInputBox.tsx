import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { COLOR } from "../../utils/constants";

type Props = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
};

const TextInputBox: React.FC<Props> = (props: Props) => {
  return (
    <TextInput
      style={style.root}
      onChangeText={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      autoFocus={props.autoFocus}
    />
  );
};

const style = StyleSheet.create({
  root: {
    display: "flex",
    height: 60,
    width: "100%",
    backgroundColor: COLOR.WHITE,
    color: COLOR.GREY,
    borderWidth: 0,
    paddingTop: 5,
    paddingLeft: 10,
  },
});

export default TextInputBox;
