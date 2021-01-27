import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.root}>
//       <View style={styles.container1}>
//         <Text style={styles.header}> Gearheads </Text>
//       </View>
//       <View style={styles.container2}>
//         <Text style={styles.text}>Welcome to gearheads.js!!!</Text>
//         <Text style={styles.body}> This is run from my other computer and renders on your screen! </Text>
//       </View>
//     </View>
//   );
// }



export default class App extends Component{
   render(){
     return (
     <View style={styles.root}>
       <View style={styles.playButton}>
        
       </View>
       <View >

       </View>
       <View>

       </View>
     </View>)
   }
 }

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: "grey"
  },
  container1:{
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center"
  },
  text:{
    color: 'black',
    fontSize: 50,
    textAlign: 'center'
  },
  playButton:{
    backgroundColor: "blue",
    width: 50,
    height: 50
  }
});
