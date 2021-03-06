import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { friendsIcon, playIcon, settingsIcon, statsIcon, homeIcon, storeIcon } from './imageNames.js';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabView, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FriendsPage from './friendsPage.js';
import Play from './session.js';
import shopPage from './shopPage.js';
import EStyleSheet from 'react-native-extended-stylesheet';


//icon vars
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
var playHeight = 90;
var playHtoW = (2000 / 1500) * (screenHeight / screenWidth);
//END icon vars
const Tab = createBottomTabNavigator();
export default class navBar extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Tab.Navigator initialRootName='Store' cardStyle={{ flex: 1 }} tabBarOptions={{ style: { backgroundColor: 'rgb(28,90,255)' }, labelPosition: 'below-icon', showLabel: true }}>
                <Tab.Screen name="Friends" options={{
                    tabBarLabel: 'Friends', tabBarIcon: (color, size) => (
                        <Image style={styles2.image} source={{ uri: friendsIcon }}></Image>
                    ),
                }}>
                    {() =>
                        <FriendsPage friends={this.props.route.params.FRIENDS} requests={this.props.route.params.REQUESTS}></FriendsPage>
                    }
                </Tab.Screen>
                <Tab.Screen name="Play" component={Play} options={{
                    tabBarLabel: 'Play', tabBarIcon: (color, size) => (
                        <Image style={{
                            width: (playHeight * playHtoW) + '%',
                            height: playHeight + '%',
                            borderRadius: 10
                        }} source={{ uri: playIcon }}></Image>
                    ),
                }}></Tab.Screen>
                <Tab.Screen name="Store" component={shopPage} options={{
                    tabBarLabel: 'Store', tabBarIcon: (color, size) => (
                        <Image style={styles2.image} source={{ uri: storeIcon }}></Image>
                    ),
                }}></Tab.Screen>
            </Tab.Navigator>

        );
    }
}

const styles2 = EStyleSheet.create({
    root: {

        display: 'flex',
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center'
    },
    image: {
        width: '20%',
        height: '90%',
        borderRadius: 10
    }
});