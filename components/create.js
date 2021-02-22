import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function CreateAccount({ route, navigation }) {
  const { username, password } = route.params;
  return (
    <CreateAccountForm
      navigation={navigation}
      username={username}
      password={password}
    />
  );
}

class CreateAccountForm extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.username = props.username;
    this.password = props.password;
    console.log(props.username);
  }

  state = {
    username: this.username,
    password: this.password,
  };
  handleUsername = (text) => {
    this.setState({ username: text });
  };
  handlePassword = (text) => {
    this.setState({ password: text });
  };

  render() {
    return (
      <View style={login_styles.container}>
        <Text style={login_styles.header}>Create Account:</Text>
        <TextInput
          style={login_styles.input}
          placeholder=" Username:"
          value={this.props.username}
          onChangeText={this.handleUsername}
        ></TextInput>
        <TextInput
          style={login_styles.input}
          placeholder=" Password:"
          value={this.props.password}
          onChangeText={this.handlePassword}
        ></TextInput>

        <Button
          style={login_styles.submitButton}
          title="Create Account"
          onPress={() =>
            this.register(this.state.username, this.state.password)
          }
        ></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  register = (username, password) => {
    if (username != "" || password != "") {
      console.log(username, password);
      let response = fetch("https://app.gpgearheads.org/api/register", {
        method: "POST",
        //mode: "no-cors",
        body: JSON.stringify({ username: username, password: password }),
      }).then((response) => {
        if (response) {
          this.navigation.navigate("Login");
        } else {
          alert("How did you fail this?");
        }
      });
    } else {
      alert("Enter valid username or password.");
    }
  };
}

const login_styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
