import React, { Component } from "react";

export default function CreateAccount({ navigation }) {
  return <CreateAccountForm navigation={navigation} />;
}

class CreateAccountForm extends Component {
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
        <Text>Create Account:</Text>
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
          onPress={() =>
            this.register(this.state.username, this.state.password)
          }
        ></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

  register = (username, password) => {
    let response = fetch("http://68.43.198.63:8000/register", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
    }).then((response) => {
      if (response) {
        this.navigation.navigate("Login");
      } else {
        alert("How did you fail this?");
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
