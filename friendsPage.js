import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { friendsIcon, playIcon, settingsIcon, statsIcon, homeIcon } from './imageNames.js';


export default class friendsPage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <AddFriendsContainer />
      </View>)
  }
}

class AddFriendsContainer extends Component {
  render() {
    return (
      <View style={styles.addFriendContainer}>
        <AddFriendsInput />
        <AddFriendsSubmit />

      </View>)
  }
}

class AddFriendsInput extends Component {
  render() {
    return (
      <TextInput style={styles.usernameInput}></TextInput>)
  }
}

class AddFriendsSubmit extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.submitUsername} ></TouchableOpacity>
      // <View style={styles.submitUsername}><Text style={styles.submitText}>Add Friend</Text></View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    backgroundColor: "white"
  },
  usernameInput: {
    width: '80%',
    height: '100%',
    fontSize: '7vh',
    backgroundColor: 'lightgrey'
  },
  submitUsername: {
    width: '20%',
    height: '100%',
    fontSize: '7vh',
    color: 'white',
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitText: {
    fontSize: '5vh',
    color: 'white'
  },
  addFriendContainer: {
    width: '100%',
    height: '10vh',
    display: 'flex',
    flexDirection: 'row'
  }
});
