import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./components/login.js";
import CreateAccount from "./components/create.js";
import Home from "./components/homepage.js";
import Friends from "./components/friends.js";
import Session from "./components/session.js";
import Game from "./components/game.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Session" component={Session} />

        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create Account" component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
