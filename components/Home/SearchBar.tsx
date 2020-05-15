import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLOR } from "../../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector, State } from "../../store/types";
import GridButton from "./GridButton";

const SearchBar: React.FC = () => {
  const navigation = useNavigation();
  const grid = useSelector((state: State) => state.photo.data.gridType);

  return (
    <View style={style.root}>
      <View
        style={style.inputContainer}
        onTouchStart={() => navigation.navigate("Search")}
      >
        <Text>Search here...</Text>
      </View>
      <View style={style.gridContainer}>
        <GridButton name={2} active={grid === 2} />
        <GridButton name={3} active={grid === 3} />
        <GridButton name={4} active={grid === 4} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 200,
    backgroundColor: COLOR.PRIMARY,
    width: "100%",
  },
  text: {
    color: COLOR.GREY,
  },
  inputContainer: {
    width: "80%",
    shadowColor: COLOR.GREY,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 10,
    shadowRadius: 16.0,
    backgroundColor: COLOR.WHITE,
    height: 50,
    elevation: 24,
    paddingTop: 15,
    paddingLeft: 20,
  },
  gridContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  buttonStyle: {
    display: "flex",
    justifyContent: "space-evenly",
    width: 70,
  },
});

export default SearchBar;
