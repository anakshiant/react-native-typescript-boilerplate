import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

import { store } from "./store";
import Home from "./pages/home";
import Cart from "./pages/cart";

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
};

const AuthStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack.Navigator initialRouteName="Home">
          <AuthStack.Screen name="Home" component={Home} />
          <AuthStack.Screen name="Cart" component={Cart} />
        </AuthStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
