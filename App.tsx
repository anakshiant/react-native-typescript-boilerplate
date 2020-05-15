import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackHeaderProps,
} from "@react-navigation/stack";

import Home from "./pages/home";
import Search from "./pages/search";
import SearchBar from "./components/Home/SearchBar";
import SearchInput from "./components/Search/SearchInput";

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

const AuthStack = createStackNavigator<RootStackParamList>();

export default function App() {
  

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack.Navigator initialRouteName="Home">
          <AuthStack.Screen
            name="Home"
            component={Home}
            options={{
              header: (_props: StackHeaderProps) => <SearchBar />,
            }}
          />
          <AuthStack.Screen
            name="Search"
            component={Search}
            options={{
              header: (_props: StackHeaderProps) => <SearchInput />,
            }}
          />
        </AuthStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
