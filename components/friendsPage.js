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
// class AddFriendsSubmit extends Component {

//   handleUsername = (text) => {
//     this.setState({ username: text })
//   }

//   state =
//     {
//       username: ''
//     }

//   addFriend(username) {
//     let response = fetch("https://app.gpgearheads.org/api/friends_list",
//       {
//         method: "POST",
//         credentials: "include",
//         body: JSON.stringify({ username: username }),
//       }).then(function (response) {
//         return response.json();
//       }).then(function (json) {
//         //Add logic to check if name already exists in database
//         json.friends.push(username);
//         console.log(json.friends);
//       });
//   }
//   render() {
//     return (
//       <View>
//         <TextInput style={styles.usernameInput} onChangeText={this.handleUsername}></TextInput>
//         <TouchableOpacity style={styles.submitUsername} onPress={this.addFriend(this.state.username)} ><Text style={styles.submitText}>Add Friend</Text></TouchableOpacity>
//       </View>
//       // <View style={styles.submitUsername}><Text style={styles.submitText}>Add Friend</Text></View>
//     )
//   }
// }
// let FRIENDS = [];
// let REQUESTS = [];
// var retrieveFriends = () => {
//   let list;
//   let friends = fetch("https://app.gpgearheads.org/api/friends_list",
//     {
//       //mode: "no-cors",
//       credentials: "include"
//     }).then(function (response) {
//       return response.json();
//     }).then(function (json) {
//       list = json.friends;
//       console.log("ok");
//       for (let i = 0; i < list.length; i++) {
//         if (friends[i].confirmed) {
//           FRIENDS.push({ id: i, name: list[i] });
//         } else {
//           REQUESTS.push({ id: i, name: list[i] });
//         }
//       }
//     });
//   console.log(REQUESTS);

// }
// retrieveFriends();
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
        data={FRIENDS}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />

    );
  }
}

function Request(item) {
  item = item.item;
  return (
    <View style={styles.request}>
      <View style={styles.requestLeft}>
        <View style={styles.requestFirstC}>
          {/* <Image style={styles.friendPicture} source={{ uri: playIcon }} /> */}
          <Text style={styles.requestName}>{item.name}</Text>
        </View>
        <View style={styles.requestTitle}><Text style={styles.requestTitleText}>Friend Request</Text></View>
      </View>
      <View style={style.requestRight}>

      </View>
    </View>);
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
        keyExtractor={item => item.id}
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
    height: '50%'
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
    height: 50,
    backgroundColor: 'darkgrey',
    borderBottomWidth: 5,
    borderColor: 'black',
    display: 'flex',
    flexDirection: 'row'
  },
  requestLeft: {
    width: "50%",
    height: 50,
  },
  requestRight: {
    width: "50%",
    height: 50,
  },
  requestFirstC: {
    display: 'flex',
    flexDirection: 'row',
    height: 25
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
    height: '15%',
    display: 'flex',
    justifyContent: 'flex-end'
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