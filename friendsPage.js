import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {friendsIcon, playIcon, settingsIcon, statsIcon, homeIcon} from './imageNames.js';

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


export default class friendsPage extends Component{
   render(){
     return (
     <View style={styles.root}>
         <View style={styles.addFriendContainer}>
         <TextInput style={styles.usernameInput}></TextInput>
         <View style={styles.submitUsername}><Text style={styles.submitText}>Add Friend</Text></View>
         </View>
       
     </View>)
   }
 }

const styles = StyleSheet.create({
  root:{
    display: 'flex',
    flex: 1,
    backgroundColor: "white"
  },
  usernameInput:{
    width: '80%',
    height: '100%',
    fontSize: '7vh',
    backgroundColor: 'lightgrey'
  },
  submitUsername:{
    width: '20%',
    height: '100%',
    fontSize: '7vh',
    color: 'white',
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitText:{
    fontSize: '5vh',
    color: 'white'
  },
  addFriendContainer:{
    width: '100%',
    height: '10vh',
    display: 'flex',
    flexDirection: 'row'
  }
});
