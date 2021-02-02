import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
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
