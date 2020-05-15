import React from "react";
import { View, StyleSheet } from "react-native";
import SearchList from "../components/Search/SearchList";

const Search: React.FC = () => {
  return (
    <View style={style.root}>
      <SearchList />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    height: "100%",
    backgroundColor: "white",
  },
});

export default Search;
