import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { COLOR } from "../../utils/constants";
import { Button, Icon } from "native-base";
import TextInputBox from "../shared/TextInputBox";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector, State } from "../../store/types";
import { searchPhotos } from "../../store/actions/photos";

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const currentSearch = useSelector(
    (state: State) => state.photo.data.currentSearch
  );

  const onChangeHandler = (value: string) => {
    dispatch({ type: "SET_SEARCH", payload: value });
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (currentSearch) {
        dispatch(searchPhotos(currentSearch, 1));
        navigation.goBack();
      }
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [currentSearch]);

  return (
    <View style={style.root}>
      <StatusBar />
      <Button
        iconLeft
        light
        style={style.button}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" />
      </Button>
      <TextInputBox
        value={currentSearch}
        onChange={onChangeHandler}
        placeholder="Search here..."
        autoFocus
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    height: 50,
  },
  button: {
    height: 60,
    width: 50,
    backgroundColor: "white",
    elevation: 0,
  },
  input: {
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
});

export default SearchInput;
