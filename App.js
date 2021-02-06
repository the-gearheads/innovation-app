import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//import ScriptTag from 'react-script-tag';
//<ScriptTag type="text/javascript" src="script.js"/>
import homePage from './homePage.js';
import friendsPage from './friendsPage.js';

export default friendsPage;

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>This is a header</Text>

      <View style={styles.form_container}>
        <Text>Login:</Text>
        <TextInput style={styles.textInputs} placeholder="   Username:"></TextInput>
        <TextInput style={styles.textInputs} placeholder="   Password:"></TextInput>

      </View>
      <View style={styles.btn_container}>
        <Button style={styles.submitBtn} title="Create Account" color="red" /*onPress={Submit()}*/></Button>
        <Button style={styles.submitBtn} title="Login" color="red" /*onPress={Submit()}*/></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  form_container:
  {
    backgroundColor: "#fff",
    width: 300,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textInputs:
  {
    width: 150,
    height: 25,
    borderColor: "black",
    borderWidth: 3,
    margin: 10,
    borderRadius: 10,

  },
  header:
  {
    fontSize: 24,
    flex: 0.1,
  },
  btn_container:
  {
    flex: 0.2,
    //justifyContent: 'center',
    //alignItems: 'center',
    flexDirection: "row",
  }
});
