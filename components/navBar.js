import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { friendsIcon, playIcon, settingsIcon, statsIcon, homeIcon, storeIcon } from './imageNames.js';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabView, createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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
                    <Tab.Screen name="Friends" component={homePage} options={{
                        tabBarLabel: 'Friends', tabBarIcon: (color, size) => (
                            <Image style={{ height: '3vmin', width: '3vmin' }} source={{ uri: friendsIcon }}></Image>
                        ),
                    }}></Tab.Screen>
                    <Tab.Screen name="Play" component={homePage} options={{
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

class homePage extends Component {
    render() {
        return (
            <Text>This is the homepage!</Text>)
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