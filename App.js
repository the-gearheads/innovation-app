import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.root}>
      <View style={styles.container1}>
        <Text style={styles.header}> Gearheads </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>Welcome to gearheads.js!!!</Text>
        <Text style={styles.body}> This is run from my other computer and renders on your screen! </Text>
      </View>
    </View>
  );
}


// export default App2;

// class App2 extends Component{
//   render(){
//     return (<View style={styles.root}>
//       <View style={styles.container1}>
//         <Text style={styles.header}> Gearheads </Text>
//       </View>
//       <View style={styles.container2}>
//         <Text style={styles.text}>Welcome to gearheads.js!!!</Text>
//         <Text style={styles.body}> This is run from my other computer and renders on your screen! </Text>
//       </View>
//     </View>)
//   }
// }

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: "white"
  },
  container1:{
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center"
  },
  header:{
    color: "white",
    fontSize: 20,
    fontWeight: "900"
  },
  container2: {
    flex: 10,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color: 'black',
    fontSize: 50,
    textAlign: 'center'
  },
  body:{
    padding: 15,
    color: 'black',
    fontWeight: "bold",
    fontSize: 20,
    textAlign: 'center'
  }
});
