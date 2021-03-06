import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Modal, TouchableOpacity, FlatList, SegmentedControlIOSComponent } from "react-native";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import { createStackNavigator } from "@react-navigation/stack";
import Game from "./game.js";
//import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();
var nav;

export default function Play() {
  //return <SessionPage navigation={navigation} />;
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="Session" component={SessionPageFinal} />
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>);
}

function SessionPageFinal({ navigation }) {
  return (<SessionPage navigation={navigation} />);
}

class SessionPage extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    nav = props.navigation
  }

  state =
    {
      username: '',
      sessionName: "",
      modal: [],
      dropdown: [],
      friend: [],
      session: [],
      friendOpened: false,
      sessionId: 0
    };

  componentWillMount() {
    this.spawnSessionList();
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.upperContainer}>
          <Text style={styles.header}>Sessions</Text>
          <TouchableOpacity style={styles.newSession} onPress={() => this.spawnModal()}>
            <Text style={styles.newSession}>+</Text>
          </TouchableOpacity>
        </View>
        {this.state.modal[0]}
        {this.state.dropdown[0]}
        {this.state.session[0]}
      </View>
    );
  }

  goBack = () => {
    this.navigation.navigate("Home");
  }

  spawnModal = () => {
    this.fetchFriends();
    var md = this.state.modal;
    var ss = this.state.session;
    ss.length = 0;
    this.setState({ session: ss });
    md.push(
      <View style={styles.modal}>
        <Text style={[{ fontSize: 36 }]}>New Session</Text>
        <TouchableOpacity onPress={() => this.spawnDropdown()}>
          <Text style={[{ fontSize: 24 }, { margin: 10 }]}>View Friends</Text>
        </TouchableOpacity>
        <TextInput
          style={[{ margin: 10 }, { borderColor: "black" }, { borderWidth: 2 }]}
          placeholder=" Session Name:"
          onChangeText={this.handleSessionName}
        ></TextInput>
        <TouchableOpacity onPress={() => this.submitFriends()}>
          <Text style={[{ fontSize: 15 }, { margin: 10 }, { position: "relative" }, { top: "20%" }, { left: 0 }, { borderColor: "black" }, { borderWidth: 3 }, { padding: 10 }]}>Submit Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.submitAll()}>
          <Text style={[{ fontSize: 15 }, { margin: 10 }, { position: "relative" }, { top: "15.25%" }, { left: 0 }, { borderColor: "black" }, { borderWidth: 3 }, { padding: 10 }]}>Submit Total</Text>
        </TouchableOpacity>

      </View>);
    this.setState({ modal: md });
  }

  handleSessionName = (text) => {
    this.setState({ sessionName: text });
  };

  spawnDropdown = () => {
    if (!this.state.friendOpened) {
      var dd = this.state.dropdown;
      dd.push(
        <FlatList style={styles.list} data={DATA} renderItem={this.renderDropdown} keyExtractor={item => item.id.toString()} />
      );
      this.setState({ dropdown: dd });
      this.setState({ friendOpened: true });
    }
    else {
      return;
    }
  }

  spawnSessionList = () => {
    var ss = this.state.session;
    ss.length = 0;
    let session = this;
    sessionData.length = 0;
    let response = fetch("https://app.gpgearheads.org/api/sessions",
      {
        credentials: "include"
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        console.log(json);
        for (let i = 0; i < json.sessions.length; i++) {
          sessionData.push({ id: json.sessions[i].id, sessionName: json.sessions[i].name, friends: json.sessions[i].users.toString() });

        }
        ss.push(
          <FlatList style={styles.sessionList} data={sessionData} renderItem={session.renderSession} keyExtractor={item => item.id.toString()} />
        );
        session.setState({ session: ss });
        session.state.friend.length = 0;
        session.setState({ friend: session.state.friend });
        session.setState({ sessionName: "" });
        session.setState({ friendOpened: false });

      });

  }

  addFriend = (name) => {
    var ch = this.state.friend;
    for (let i = 0; i < this.state.friend.length; i++) {
      if (name == this.state.friend[i]) {
        return;
      }
    }
    ch.push(name);
    this.setState({ friend: ch });
  }

  submitFriends = () => {
    var dd = this.state.dropdown;
    dd.length = 0;
    this.setState({ dropdown: dd });
  }

  submitAll = () => {
    if (this.state.friend.length == 0) {
      return;
    }
    if (this.state.sessionName == "") {
      return;
    }
    var modal = this.state.modal;
    modal.length = 0;
    this.setState({ modal: modal });
    let response = fetch("https://app.gpgearheads.org/api/create_session",
      {
        method: "POST",
        mode: "no-cors",
        credentials: "include",
        body: JSON.stringify({ name: this.state.sessionName, users: this.state.friend }),
      }).then((response) => {
        if (response.ok) {
          console.log("Sent");
        }
        else {
          return;
        }
      });
    this.spawnSessionList();
  }

  renderDropdown = (item) => {
    return (<Friend item={item.item} play={this} />);
  }

  renderSession = (item) => {
    return (<Session item={item.item} play={this} />);
  }

  fetchFriends = () => {
    let friends = fetch("https://app.gpgearheads.org/api/friends_list",
      {
        //mode: "no-cors",
        credentials: "include"
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        let friends = json.friends;
        console.log("ok");
        for (let i = 0; i < friends.length; i++) {
          console.log(friends[i]);
          if (friends[i].confirmed)
            DATA.push({ id: friends[i].id, name: friends[i].name });
        }
      });
  }

}

const DATA = [

];

const sessionData = [
  //Session instances, use to display multiple instances of sessions
];

function Friend(play) {
  let itemData = play.play.state.check;
  return (
    <TouchableOpacity style={styles.optionBox} onPress={() => play.play.addFriend(play.item.name)}>
      <Text>{play.item.name}</Text>
      {itemData}
    </TouchableOpacity>);
}

function Session(play) {
  return (
    <TouchableOpacity style={styles.sessionBox} onPress={() => Redirect({ id: play.item.id })}>
      <Text>{play.item.id}</Text>
      <Text>{play.item.sessionName}</Text>
      <Text>{play.item.friends}</Text>
    </TouchableOpacity>
  );
}

function Redirect(route) {
  nav.navigate("Game", route);
}




const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
  },
  upperContainer:
  {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  header:
  {
    fontSize: 36,
    margin: 25

  },
  newSession:
  {
    fontSize: 36,
    position: "absolute",
    right: "-1%",
    top: "5%",
  },
  modal: {
    width: "60%",
    height: "45%",
    position: "absolute",
    left: "20%",
    top: "15%",
    borderColor: "black",
    backgroundColor: "lightblue",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    zIndex: 2,
  },
  optionBox:
  {
    width: "25%",
    height: 50,
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10,
  },
  sessionBox:
  {
    width: "40%",
    height: 75,
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: "lightblue",
    margin: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  greenBlock:
  {
    width: 15,
    height: 5,
    backgroundColor: "green",
    position: "absolute",
    top: 10,
    left: 10,
  },
  list:
  {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: "37.5%",
    top: "60%",
    zIndex: 1,
  },
  sessionList:
  {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: "27.5%",
    top: "10%",
    zIndex: 1,
  },
  back:
  {
    backgroundColor: "lightgrey",
    width: 100,
    height: 50,
    position: "absolute",
    top: "90%",
    left: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 10,
    zIndex: 2
  }
});
