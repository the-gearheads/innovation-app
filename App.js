import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
//import {Home} from "components";
//import ScriptTag from 'react-script-tag';
//<ScriptTag type="text/javascript" src="script.js"/>

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>About</Text>
          </Link>
          <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Topics</Text>
          </Link>
        </View>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </View>
    </NativeRouter>
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
