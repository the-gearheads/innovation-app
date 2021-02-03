import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.root}>
      <View style={styles.playButton}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 36,
  },
  navItem: {
    fontSize: 36,
  },
  root: {
    flex: 1,
    backgroundColor: "grey",
  },
  container1: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 50,
    textAlign: "center",
  },
  playButton: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
  },
});
