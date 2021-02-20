import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { friendsIcon, playIcon, settingsIcon, statsIcon, homeIcon, storeIcon } from './imageNames.js';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabView, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homePage from './homePage.js';
import friendsPage from './friendsPage.js';
import Play from './playPage';


const Tab = createBottomTabNavigator();
export default class navBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{ labelPosition: 'below-icon', showLabel: false }}>
          <Tab.Screen name="Stats" component={homePage} options={{
            tabBarLabel: 'Stats', tabBarIcon: (color, size) => (
              <Image style={{ height: '3vmin', width: '3vmin' }} source={{ uri: statsIcon }}></Image>
            ),
          }}></Tab.Screen>
          <Tab.Screen name="Friends" component={friendsPage} options={{
            tabBarLabel: 'Friends', tabBarIcon: (color, size) => (
              <Image style={{ height: '3vmin', width: '3vmin' }} source={{ uri: friendsIcon }}></Image>
            ),
          }}></Tab.Screen>
          <Tab.Screen name="Play" component={Play} options={{
            tabBarLabel: 'Play', tabBarIcon: (color, size) => (
              <Image style={{ height: '3vmin', width: '3vmin' }} source={{ uri: playIcon }}></Image>
            ),
          }}></Tab.Screen>
          <Tab.Screen name="Settings" component={homePage} options={{
            tabBarLabel: 'Settings', tabBarIcon: (color, size) => (
              <Image style={{ height: '3vmin', width: '3vmin' }} source={{ uri: settingsIcon }}></Image>
            ),
          }}></Tab.Screen>
          <Tab.Screen name="Store" component={homePage} options={{
            tabBarLabel: 'Store', tabBarIcon: (color, size) => (
              <Image style={{ height: '3vmin', width: '3vmin' }} source={{ uri: storeIcon }}></Image>
            ),
          }}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const styles2 = StyleSheet.create({
  root: {

    display: 'flex',
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center'
  }
});

// function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>This is a header</Text>

//       <View style={styles.form_container}>
//         <Text>Login:</Text>
//         <TextInput style={styles.textInputs} placeholder="   Username:"></TextInput>
//         <TextInput style={styles.textInputs} placeholder="   Password:"></TextInput>

//       </View>
//       <View style={styles.btn_container}>
//         <Button style={styles.submitBtn} title="Create Account" color="red" /*onPress={Submit()}*/></Button>
//         <Button style={styles.submitBtn} title="Login" color="red" /*onPress={Submit()}*/></Button>
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   form_container:
//   {
//     backgroundColor: "#fff",
//     width: 300,
//     height: 100,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   textInputs:
//   {
//     width: 150,
//     height: 25,
//     borderColor: "black",
//     borderWidth: 3,
//     margin: 10,
//     borderRadius: 10,

//   },
//   header:
//   {
//     fontSize: 24,
//     flex: 0.1,
//   },
//   btn_container:
//   {
//     flex: 0.2,
//     //justifyContent: 'center',
//     //alignItems: 'center',
//     flexDirection: "row",
//   }
// });
