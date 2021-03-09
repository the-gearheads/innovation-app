import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, FlatList, Image, ScrollView, SafeAreaView } from 'react-native';
import { friendsIcon, playIcon, settingsIcon, statsIcon, homeIcon, storeIcon } from './imageNames.js';
import EStyleSheet from 'react-native-extended-stylesheet';

var accountPoints;
export default class ShopPage extends Component {
    constructor(props) {
        super(props);
        accountPoints = props.points;
        console.log(accountPoints);
    }
    render() {
        return (
            <SafeAreaView style={styles.root}>
                {/* <Text style={styles.pointsText}>{accountPoints}</Text> */}
                <Text style={[{ position: "absolute" }, { fontSize: 50 }, { top: "1%" }, { left: "1%" }, { backgroundColor: "white" }, { color: "red" }, { borderRadius: 10 }, { borderColor: "black" }, { borderWidth: 5 }, { fontFamily: "Comic Sans MS" }]}>Points: {accountPoints}</Text>
                <ScrollView contentContainerStyle={styles.itemsContainer}>

                    <Item parent={this} imgURL={friendsIcon} price={300} name='Fire Avatar'></Item>
                    <Item parent={this} imgURL={playIcon} price={500} name='Cloud Avatar'></Item>
                    <Item parent={this} imgURL={settingsIcon} price={350} name='Water Avatar'></Item>
                    <Item parent={this} imgURL={statsIcon} price={750} name='Pokemon Avatar'></Item>
                    <Item parent={this} imgURL={storeIcon} price={1000} name='Gearhead Avatar'></Item>
                    <Item parent={this} imgURL={friendsIcon} price={300} name='Fire Avatar'></Item>
                    <Item parent={this} imgURL={playIcon} price={500} name='Cloud Avatar'></Item>
                    <Item parent={this} imgURL={settingsIcon} price={350} name='Water Avatar'></Item>
                    <Item parent={this} imgURL={statsIcon} price={750} name='Pokemon Avatar'></Item>
                    <Item parent={this} imgURL={storeIcon} price={1000} name='Gearhead Avatar'></Item>
                </ScrollView>
            </SafeAreaView>)
    }
}

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { itemIsVisible: true };
        this.onBuy = this.onBuy.bind(this);
    }
    onBuy() {
        //accountPoints -= this.props.price;
        let shop = this;
        if (accountPoints - this.props.price >= 0) {
            let response = fetch("https://app.gpgearheads.org/api/buy",
                {
                    method: "POST",
                    // mode: "no-cors",
                    body: JSON.stringify({ avatar: this.props.name, price: this.props.price }),
                    credentials: "include",
                }).then((response) => {
                    if (response.ok) {
                        let avatarResponse = fetch("https://app.gpgearheads.org/api/avatar",
                            {
                                credentials: "include",
                            }).then(function (avatarResponse) {
                                return avatarResponse.json();
                            }).then(function (json) {
                                console.log(json);
                                shop.forceUpdate();
                            });
                    }
                    else {
                        console.log("Fail time")
                    }
                });
        }
        else {
            alert("Not enough points to buy this!");
        }
    }
    render() {
        if (!this.state.itemIsVisible) {
            return null;
        }
        return (
            <View style={[styles.item]} >
                <Image style={styles.itemImg} source={{ uri: this.props.imgURL }} />
                <Text style={styles.itemPrice}> {this.props.price} </Text>
                <Text style={styles.itemName}> {this.props.name} </Text>
                <TouchableOpacity style={styles.buyBtn} onPress={this.onBuy}><Text style={styles.buyBtnText}>Buy</Text></TouchableOpacity>
            </View >
        );
    }
}

const styles = EStyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'rgb(108, 148, 255)',
    },
    itemsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    item: {
        display: 'flex',
        flexShrink: 0,
        flexGrow: 0,
        alignItems: 'center',
        width: '30%',
        height: '50%',
        borderWidth: 1,
        borderColor: 'black',
        marginTop: '5%',
        marginBottom: '5%'
    },
    itemImg: {
        width: '80%',
        height: '50%',
        resizeMode: 'contain'
    },
    itemName: {
        width: '100%',
        fontSize: 15,  //used to be 5vh //Depends on item height
        marginBottom: '3%'
    },
    itemPrice: {
        marginTop: '5%',
        marginBottom: '5%',
        marginRight: '5%',
        fontSize: 15, //used to be 3vh//Depends on item height
        alignSelf: 'flex-end',
        backgroundColor: 'gold',
        color: 'white'
    },
    buyBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 10, //used to be 4vh//Depends on item height
        color: 'white',
        backgroundColor: 'red',
        borderRadius: 10, //used to be 10% 
        padding: '5%'
    },
    buyBtnText: {
        fontSize: 15, //used to be 100%
        color: 'white'
    },
    pointsText: {
        zIndex: 5,
        position: 'absolute',
        top: '5%',
        right: '5%',
        fontSize: 10, //used to be 5vh
        backgroundColor: 'blue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2%',
        borderRadius: 5//used to be 10%
    }
});