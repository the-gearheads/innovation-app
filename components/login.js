import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Login({ navigation }) {
  return <LoginForm navigation={navigation} />;
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  state = {
    username: "",
    password: "",
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
        <Text>Login:</Text>
        <TextInput
          style={login_styles.input}
          placeholder="   Username:"
          onChangeText={this.handleUsername}
        ></TextInput>
        <TextInput
          style={login_styles.input}
          placeholder="   Password:"
          onChangeText={this.handlePassword}
        ></TextInput>

        <Button
          style={login_styles.submitButton}
          title="Create Account"
          color="red"
          onPress={() => this.navigation.navigate("CreateAccount")}
        ></Button>
        <Button
          style={login_styles.submitButton}
          title="Login"
          color="red"
          onPress={() =>
            this.fetchText(this.state.username, this.state.password)
          }
        ></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  fetchText = (username, password) => {
    let response = fetch("http://68.43.198.63:8000/login", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ username: username, password: password }),
      credentials: "include",
    }).then((response) => {
      console.log(response);
      if (response) {
        this.navigation.navigate("Home");
      } else {
        alert("Credentials are invalid.");
      }
    });
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
