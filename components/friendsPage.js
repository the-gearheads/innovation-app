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
      <View></View>);
  }
}

class AddFriendsSubmit extends Component {

  handleUsername = (text) => {
    this.setState({ username: text })
  }

  state =
    {
      username: ''
    }

  addFriend(username) {
    let response = fetch("https://app.gpgearheads.org/api/friends_list",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ username: username }),
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        //Add logic to check if name already exists in database
        json.friends.push(username);
        console.log(json.friends);
      });
  }
  render() {
    return (
      <View>
        <TextInput style={styles.usernameInput} onChangeText={this.handleUsername}></TextInput>
        <TouchableOpacity style={styles.submitUsername} onPress={this.addFriend(this.state.username)} ><Text style={styles.submitText}>Add Friend</Text></TouchableOpacity>
      </View>
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
    name: 'ExerciseIsCool',
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
      <View style={[styles.friendPicture, { backgroundImage: 'url("' + item.image + '")' }]} />
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
    width: '100%',
    height: '20%',
    backgroundColor: 'darkgrey',
    borderBottomWidth: 5,
    borderColor: 'black'
  }, friendFirstC: {
    display: 'flex',
    flexDirection: 'row',
    height: '5%'
  }, friendName: {
    fontSize: 24,
    color: 'grey'
  },
  friendPicture: {
    height: '5%',
    width: '5%',
    //backgroundSize: '100% auto',
    //backgroundPosition: 'center'
  },
  sharedGamesText: {
    color: 'black',
    margin: '2%'
  },
  sharedGames: {
    height: '15%',
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
    fontSize: 24,
    backgroundColor: 'lightgrey'
  },
  submitUsername: {
    width: '20%',
    height: '100%',
    fontSize: 24,
    color: 'white',
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitText: {
    fontSize: 24,
    color: 'white'
  },
  addFriendContainer: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row'
  }
});