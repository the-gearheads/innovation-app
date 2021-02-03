import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./components/login.js";
import CreateAccount from "./components/createAccount.js";
import Home from "./components/homePage.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create Account" component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
