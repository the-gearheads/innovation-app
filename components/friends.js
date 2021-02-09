import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Friends({navigation}) 
{
  return <FriendsPage navigation={navigation} />;
}

class FriendsPage extends Component {
  constructor(props) 
  {
    super(props);
    this.navigation = props.navigation;
  }

  state = 
  {
    username: '',
  };

  handleFriendsName = (text) => 
  {
    this.setState({username: text});
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.addFriendContainer}>
          <TextInput style={styles.usernameInput} onChangeText={this.handleFriendsName}></TextInput>
          <View style={styles.submitUsername}>
            <TouchableOpacity style={styles.submitText} onPress={() => alert(this.state.username)}>Add Friend</TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  fetchFriendUsername = (username) => 
  {
    //friends or something like it
    let response = fetch("http://68.43.198.63:8000/friends", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ username: username, password: password }),
      credentials: "include",}).then((response) => 
      {
        if(response) 
        {
          //ok
        }
        else 
        {
          //not ok
        }
      })
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
    fontSize: 48,
    backgroundColor: "lightgrey",
  },
  submitUsername: {
    width: "20%",
    height: "100%",
    fontSize: 48,
    color: "white",
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: {
    fontSize: 36,
    color: "white",
  },
  addFriendContainer: {
    width: "100%",
    height: "10vh",
    display: "flex",
    flexDirection: "row",
  },
});
