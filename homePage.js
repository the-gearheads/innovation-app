import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
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


export default class homePage extends Component{
   render(){
     return (
     <View style={styles2.root}>
       <View style={styles2.feed}></View>
         <View style={styles2.navbar}>
           <View style={styles2.settingsBtn}></View>
           <View style={styles2.homeBtn}></View>
           <View style={styles2.playBtn}></View>
           <View style={styles2.friendsBtn}></View>
           <View style={styles2.statusBtn}></View>
           
         </View>
     </View>)
   }
 }

const styles2 = StyleSheet.create({
  root:{
    
    display: 'flex',
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center'
  },
  feed:{
    width: '100vw',
    height: '85vh'
  },
  navbar:{
    height: '15vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  playBtn:{
    height: '100%',
    width: '20%',
    backgroundColor: "blue",
    backgroundImage: 'url("'+playIcon+'")',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  friendsBtn:{
    height: '100%',
    width: '20%',
    backgroundColor: "purple",
    backgroundImage: 'url("'+friendsIcon+'")',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  settingsBtn:{
    height: '100%',
    width: '20%',
    backgroundColor: "orange",
    backgroundImage: 'url("'+settingsIcon+'")',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  homeBtn:{
    height: '100%',
    width: '20%',
    backgroundColor: "green",
    backgroundImage: 'url("'+homeIcon+'")',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  statusBtn:{
    height: '100%',
    width: '20%',
    backgroundColor: "red",
    backgroundImage: 'url("'+statsIcon+'")',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  btnText:{
    color: '#EFFBFB'
  }
});



