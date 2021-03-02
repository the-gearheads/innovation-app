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
      <View style={login_styles.root}>
        <View style={login_styles.container}>
          <Text style={login_styles.header}>Login:</Text>
          <TextInput
            style={login_styles.input}
            placeholder=" Username:"
            onChangeText={this.handleUsername}
          ></TextInput>
          <TextInput
            style={login_styles.input}
            placeholder=" Password:"
            onChangeText={this.handlePassword}
          ></TextInput>

          <Button
            style={login_styles.submitButton}
            title="Create Account"
            onPress={() => this.register(this.state.username, this.state.password)}></Button>
          <Button
            style={login_styles.submitButton}
            title="Login"
            onPress={() =>
              this.fetchText(this.state.username, this.state.password)
            }
          ></Button>
          <StatusBar style="auto" />
        </View>
      </View>

    );
  }

  register = (username, password) => {
    if (username != "" || password != "") {
      console.log(username, password);
      let response = fetch("https://app.gpgearheads.org/api/register", {
        method: "POST",
        mode: "no-cors",
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

  fetchText = (username, password) => {
    let response = fetch("https://app.gpgearheads.org/api/login", {
      method: "POST",
      // mode: "no-cors",
      body: JSON.stringify({ username: username, password: password }),
      credentials: "include",
    }).then((response) => {
      if (response.ok) {
        var navigateVar = this.navigation;
        // let git_response = fetch("https://app.gpgearheads.org/api/get", {
        //   //mode: "no-cors",
        //   credentials: "include",
        // }).then((git_response) => {
        // if (git_response) {
        // this.navigation.navigate("Navbar", retrieveFriends());
        /* *Start*/
        let FRIENDS = [];
        let REQUESTS = [];
        let list;
        fetch("https://app.gpgearheads.org/api/friends_list",
          {
            // mode: "no-cors",
            credentials: "include"
          }).then(function (response) {
            return response.json();
          }).then(function (json) {
            list = json.friends;

            list.forEach(element => {

              if (element.confirmed) {
                FRIENDS.push({ id: element.id, name: element.name });
              } else {
                REQUESTS.push({ id: element.id, name: element.name });
              }
            });
            navigateVar.navigate("Navbar", { "FRIENDS": FRIENDS, "REQUESTS": REQUESTS });

          });
        /* End*/
      }
      else {
        alert("Credentials are invalid.");
      }
    });
  }
}
var retrieveFriends = () => {
  let FRIENDS = [];
  let REQUESTS = [];
  let list;
  fetch("https://app.gpgearheads.org/api/friends_list",
    {
      //mode: "no-cors",
      credentials: "include"
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      list = json.friends;

      list.forEach(element => {

        if (element.confirmed) {
          FRIENDS.push({ id: element.id, name: element.name });
        } else {
          REQUESTS.push({ id: element.id, name: element.name });
        }
      });

      return { "FRIENDS": FRIENDS, "REQUESTS": REQUESTS };
    });

  return { "FRIENDS": FRIENDS, "REQUESTS": REQUESTS };
}
const login_styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgb(108, 148, 255)',
    flex: 1
  },
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
