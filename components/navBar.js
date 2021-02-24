import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { friendsIcon, playIcon, settingsIcon, statsIcon, homeIcon, storeIcon } from './imageNames.js';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabView, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import friendsPage from './friendsPage.js';
import Play from './session.js';
import shopPage from './shopPage.js';


const Tab = createBottomTabNavigator();
export default friendsPage; class navBar extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator tabBarOptions={{ labelPosition: 'below-icon', showLabel: false }}></Tab.Navigator>
                <Tab.Navigator initialRootName='Store' tabBarOptions={{ labelPosition: 'below-icon', showLabel: false }}>
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
                    <Tab.Screen name="Store" component={shopPage} options={{
                        tabBarLabel: 'Store', tabBarIcon: (color, size) => (
                            <Image style={{ height: '3vmin', width: '3vmin' }} source={{ uri: storeIcon }}></Image>
                        ),
                    }}></Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        );
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