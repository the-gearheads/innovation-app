import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, FlatList, Image } from 'react-native';
import { friendsIcon, playIcon, settingsIcon, statsIcon, homeIcon } from './imageNames.js';


export default class friendsPage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <AddFriendsContainer />
        <FriendsList />
      </View>)
  }
}

class AddFriendsContainer extends Component {
  render() {
    return (
      <View style={styles.addFriendContainer}>
        <AddFriendsInput />
        <AddFriendsSubmit />


      </View>)
  }
}

class AddFriendsInput extends Component {
  render() {
    return (
      <TextInput style={styles.usernameInput}></TextInput>)
  }
}

class AddFriendsSubmit extends Component {
  addFriend() {
    alert('friend added');
  }
  render() {
    return (
      <TouchableOpacity style={styles.submitUsername} onPress={this.addFriend} ><Text style={styles.submitText}>Add Friend</Text></TouchableOpacity>
      // <View style={styles.submitUsername}><Text style={styles.submitText}>Add Friend</Text></View>
    )
  }
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'exerciseSlayer123',
    sharedgames: '7 games shared',
    image: friendsIcon
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'xxxExercisexxx',
    sharedgames: '3 games shared',
    image: friendsIcon
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'anotherUser',
    sharedgames: '4 games shared',
    image: friendsIcon
  },
];

function Friend(item) {
  item = item.item;
  return (<View style={styles.friend}>
    <View style={styles.friendFirstC}>
      <View style={[styles.friendPicture, { backgroundImage: 'url("' + friendsIcon + '")' }]} />
      <Text style={styles.friendName}>{item.name}</Text>
    </View>
    <View style={styles.sharedGames}><Text style={styles.sharedGamesText}>{item.sharedgames}</Text></View>

  </View>);
}

class FriendsList extends Component {
  renderItem(item) {
    return (<Friend item={item.item} />)
  }

  render() {
    return (

      <FlatList
        data={DATA}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />

    );
  }
}


const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    backgroundColor: "white"
  },
  friend: {
    width: '100vw',
    height: '20vh',
    backgroundColor: 'darkgrey',
    borderBottomWidth: '1vh',
    borderColor: 'black'
  }, friendFirstC: {
    display: 'flex',
    flexDirection: 'row',
    height: '5vh'
  }, friendName: {
    fontSize: '5vmin',
    color: 'grey'
  },
  friendPicture: {
    height: '5vmin',
    width: '5vmin',
    backgroundSize: '100% auto',
    backgroundPosition: 'center'
  },
  sharedGamesText: {
    color: 'black',
    margin: '2vh'
  },
  sharedGames: {
    height: '15vh',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  friendText: {
    color: 'white',
    height: '100%',
    width: '100%'
  },
  usernameInput: {
    width: '80%',
    height: '100%',
    fontSize: '7vh',
    backgroundColor: 'lightgrey'
  },
  submitUsername: {
    width: '20%',
    height: '100%',
    fontSize: '7vh',
    color: 'white',
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitText: {
    fontSize: '5vh',
    color: 'white'
  },
  addFriendContainer: {
    width: '100%',
    height: '10vh',
    display: 'flex',
    flexDirection: 'row'
  }
});
