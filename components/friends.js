import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class Friends extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.addFriendContainer}>
          <TextInput style={styles.usernameInput}></TextInput>
          <View style={styles.submitUsername}>
            <Text style={styles.submitText}>Add Friend</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
  },
  usernameInput: {
    width: "80%",
    height: "100%",
    fontSize: "7vh",
    backgroundColor: "lightgrey",
  },
  submitUsername: {
    width: "20%",
    height: "100%",
    fontSize: "7vh",
    color: "white",
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: {
    fontSize: "5vh",
    color: "white",
  },
  addFriendContainer: {
    width: "100%",
    height: "10vh",
    display: "flex",
    flexDirection: "row",
  },
});
