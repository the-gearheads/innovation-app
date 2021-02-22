import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, FlatList, Image } from 'react-native';
import { friendsIcon, playIcon, settingsIcon, statsIcon, homeIcon, storeIcon } from './imageNames.js';

var accountPoints = 300;

export default class shopPage extends Component {
    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.pointsText}>{accountPoints}</Text>
                <View style={styles.itemsContainer}>
                    {/* <View style={styles.item}>
                        <Image style={styles.itemImg} source={{ uri: friendsIcon }} />
                        <Text style={styles.itemPrice}> 300 </Text>
                        <Text style={styles.itemName}> Friends Icon</Text>
                        <TouchableOpacity style={styles.buyBtn}><Text style={styles.buyBtnText}>Buy</Text></TouchableOpacity>
                    </View> */}
                    <Item parent={this} imgURL={friendsIcon} price={300} name='Fire Avatar'></Item>
                    <Item parent={this} imgURL={playIcon} price={500} name='Cloud Avatar'></Item>
                    <Item parent={this} imgURL={settingsIcon} price={350} name='Water Avatar'></Item>
                    <Item parent={this} imgURL={statsIcon} price={750} name='Pokemon Avatar'></Item>
                    <Item parent={this} imgURL={storeIcon} price={1000} name='Gearhead Avatar'></Item>
                </View>
            </View>)
    }
}

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { itemIsVisible: true };
        this.onBuy = this.onBuy.bind(this);
    }
    onBuy() {
        accountPoints -= this.props.price;
        this.setState({ itemIsVisible: false });
        this.props.parent.forceUpdate();
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

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flex: 1,
        backgroundColor: "white",
        position: 'relative'
    },
    itemsContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        width: '30vw',
        height: '50vh',
        borderWidth: '1vmin',
        borderColor: 'black',
        marginTop: '3vh',
        marginBottom: '3vh'
    },
    itemImg: {
        width: '80%',
        height: '50%',
        resizeMode: 'contain'
    },
    itemName: {
        width: '100%',
        fontSize: '5vh', //Depends on item height
        marginBottom: '3%'
    },
    itemPrice: {
        marginTop: '5%',
        marginBottom: '5%',
        marginRight: '5%',
        fontSize: '3vh', //Depends on item height
        alignSelf: 'flex-end',
        backgroundColor: 'gold',
        color: 'white'
    },
    buyBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '10%',
        fontSize: '4vh', //Depends on item height
        color: 'white',
        backgroundColor: 'red',
        borderRadius: '10%'
    },
    buyBtnText: {
        fontSize: '100%',
        color: 'white'
    },
    pointsText: {
        position: 'fixed',
        top: '5vh',
        right: '5vw',
        height: '5vh',
        fontSize: '5vh',
        backgroundColor: 'blue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2vmin',
        borderRadius: '10%'
    }
});
