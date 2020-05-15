import React from "react";
import { View, Text } from "react-native";
import { List, ListItem } from "native-base";

const SearchList: React.FC = () => {
  return (
    <View style={{backgroundColor:'white'}}>
      <List>
        <ListItem>
          <Text>Anand</Text>
        </ListItem>
        <ListItem>
          <Text>Anand</Text>
        </ListItem>
      </List>
    </View>
  );
};

export default SearchList;

