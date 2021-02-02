import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import base64 from "react-native-base64";
import { back } from "react-native/Libraries/Animated/src/Easing";

const Stack = createStackNavigator();

function Home({ navigation }) {
  return (
    <View style={styles.root}>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
class LoginForm extends Component {
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
          color="red" /*onPress={Submit()}*/
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
    }).then((response) => {
      if (response.status == 200) {
        //Move on to home screen
      } else {
        alert("Credentials are invalid.");
      }
      if (response.status === 200) {
        let data = response.text();
        console.log(data);
      }
    });
  };
}

function Login() {
  return <LoginForm />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
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
