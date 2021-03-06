import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, FlatList, Image } from 'react-native';
import { friendsIcon, playIcon, settingsIcon, statsIcon, homeIcon } from './imageNames.js';
import EStyleSheet from 'react-native-extended-stylesheet';

var FRIENDS;
var REQUESTS;
export default class FriendsPage extends Component {
  constructor(props) {
    super(props);
    FRIENDS = props.friends;
    REQUESTS = props.requests;
    console.log(REQUESTS.length);
    var i = 0;
    for (i = 0; i < REQUESTS.length; i++) {
      REQUESTS[i].id = REQUESTS[i].id + 'x';
      console.log(REQUESTS);
      console.log('heloo');
    }

  }
  render() {
    return (
      <View style={styles.root}>
        <AddFriendsContainer />
        <FriendsList />
        <RequestsList />
      </View>)
  }
}

class AddFriendsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: '' };
    this.onChangeText = this.onChangeText.bind(this);
    this.submitRequest = this.submitRequest.bind(this);
  }
  onChangeText(text) {
    this.setState({ userName: text });
    console.log(text);
  }
  submitRequest() {
    let list;
    let friends = fetch("https://app.gpgearheads.org/api/add_friend",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ username: this.state.userName })
      });
    console.log(list);
  }
  render() {
    return (
      <View style={styles.addFriendContainer}>
        <AddFriendsInput onChangeText={this.onChangeText} />
        <AddFriendsSubmit submitRequest={this.submitRequest} />
      </View>)
  }
}

class AddFriendsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TextInput style={styles.usernameInput} onChangeText={this.props.onChangeText}></TextInput>
    );
  }
}
class AddFriendsSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TouchableOpacity style={styles.submitUsername} onPress={this.props.submitRequest}><Text style={styles.submitText}>Add Friend</Text></TouchableOpacity>
    )
  }
}



const DATA = [
  {
    id: 10,
    name: 'exerciseSlayer123',
    sharedgames: '7 games shared',
    image: friendsIcon
  },
  // {
  //   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //   name: 'ExerciseIsCool',
  //   sharedgames: '3 games shared',
  //   image: friendsIcon
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //   name: 'anotherUser',
  //   sharedgames: '4 games shared',
  //   image: friendsIcon
  // },
];

function Friend(item) {
  item = item.item;
  return (<View style={styles.friend}>
    <View style={styles.friendFirstC}>
      {/* <Image style={styles.friendPicture} source={{ uri: playIcon }} /> */}
      <Text style={styles.friendName}>{item.name}</Text>
    </View>
    {/* <View style={styles.sharedGames}><Text style={styles.sharedGamesText}>{item.sharedgames}</Text></View> */}

  </View>);
}

class FriendsList extends Component {
  renderItem(item) {
    return (<Friend item={item.item} />)
  }

  render() {
    return (

      <FlatList
        data={FRIENDS}
        renderItem={this.renderItem}
        keyExtractor={item => item.id.toString()}
      />

    );
  }
}

class Request extends Component {
  constructor(props) {
    super(props);
    this.acceptFriend = this.acceptFriend.bind(this);
    console.log(this.props.item.name);
  }

  acceptFriend() {
    let response = fetch("https://app.gpgearheads.org/api/accept_friend",
      {
        method: "POST",
        mode: "no-cors",
        credentials: "include",
        body: JSON.stringify({ username: this.props.item.name }),
      }).then((response) => {
        if (response.ok) {
          console.log("Sent");
        }
        else {
          return;
        }
      });
  }
  render() {
    return (
      <View style={styles.request}>
        <View style={styles.requestLeft}>
          <View style={styles.requestFirstC}>
            {/* <Image style={styles.friendPicture} source={{ uri: playIcon }} /> */}
            <Text style={styles.requestName}>{this.props.item.name}</Text>
          </View>
          <View style={styles.requestTitle}><Text style={styles.requestTitleText}>Friend Request</Text></View>
        </View>
        <View style={styles.requestRight}>
          <TouchableOpacity style={styles.requestBtn} onPress={this.acceptFriend}><Text style={styles.requestBtnText}>Accept</Text></TouchableOpacity>
          <TouchableOpacity style={styles.requestBtn}><Text style={styles.requestBtnText}>Deny</Text></TouchableOpacity>
        </View>
      </View>);
  }
}

class RequestsList extends Component {
  renderItem(item) {
    return (<Request item={item.item} />)
  }

  render() {
    return (

      <FlatList
        data={REQUESTS}
        renderItem={this.renderItem}
        keyExtractor={item => item.id.toString()}
      />

    );
  }
}


const styles = EStyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    backgroundColor: "white"
  },
  friend: {
    width: '100%',
    height: 50,
    backgroundColor: 'darkgrey',
    borderBottomWidth: 5,
    borderColor: 'black'
  }, friendFirstC: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center'
  }, friendName: {
    fontSize: 20,
    color: 'grey',
    marginLeft: '5%'
  },
  friendPicture: {
    height: '100%',
    width: '6%',
    // backgroundSize: '100% auto',
    // backgroundPosition: 'center'
  },
  request: {
    width: '100%',
    height: 70,
    backgroundColor: 'darkgrey',
    borderBottomWidth: 5,
    borderColor: 'black',
    display: 'flex',
    flexDirection: 'row'
  },
  requestLeft: {
    width: "50%",
    height: '100%',
  },
  requestRight: {
    width: "50%",
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  requestFirstC: {
    display: 'flex',
    flexDirection: 'row',
    height: '50%'
  }, requestName: {
    fontSize: 20,
    color: 'grey',
    marginLeft: '5%'
  },
  requestPicture: {
    height: '100%',
    width: '6%',
    // backgroundSize: '100% auto',
    // backgroundPosition: 'center'
  },
  requestTitleText: {
    color: 'black',
    margin: '2%'
  },
  requestTitle: {
    height: '50%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  requestBtn: {
    height: '40%',
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 10
  },
  requestBtnText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
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
    fontSize: 20,
    color: 'white',
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  submitText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  addFriendContainer: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row'
  }
});