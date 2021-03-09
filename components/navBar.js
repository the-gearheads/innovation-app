import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Touchable } from 'react-native';
import { friendsIcon, playIcon, settingsIcon, statsIcon, homeIcon, storeIcon } from './imageNames.js';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabView, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FriendsPage from './friendsPage.js';
import Play from './session.js';
import ShopPage from './shopPage.js';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();
export default class navBar extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log(this.props.route.params);
        return (
            <Tab.Navigator initialRootName='Store' cardStyle={{ flex: 1 }} tabBarOptions={{ labelPosition: 'below-icon', showLabel: true }}>
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
                        <Image style={styles2.image} source={{ uri: playIcon }}></Image>
                    ),
                }}>
                </Tab.Screen>
                <Tab.Screen name="Store" options={{
                    tabBarLabel: 'Store', tabBarIcon: (color, size) => (
                        <Image style={styles2.image} source={{ uri: storeIcon }}></Image>
                    ),
                }}>
                    {() =>
                        <ShopPage points={this.props.route.params.accountPoints}></ShopPage>
                    }

                </Tab.Screen>
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
        height: '100%'
    }
});