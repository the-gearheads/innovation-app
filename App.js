import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();

import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './components/login.js'
import navBar from "./components/navBar.js";
import test from './test.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" cardStyle={{ flex: 1 }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Navbar" component={navBar} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
