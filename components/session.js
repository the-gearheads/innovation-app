import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Modal, TouchableOpacity, FlatList } from "react-native";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
//import { TouchableOpacity } from "react-native-gesture-handler";

export default function Play({ navigation }) {
  return <SessionPage navigation={navigation} />;
}

class SessionPage extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  state =
    {
      username: '',
      date: '',
      sessionName: "",
      noChosenDate: true,
      modal: [],
      dropdown: [],
      friend: [],
      calendar: [],
      session: [],


    };

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
        {this.state.calendar[0]}
        {this.state.session[0]}
        <TouchableOpacity style={styles.back} onPress={() => this.fetchFriends()}>
          <Text style={[{ fontSize: 20 }]}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  goBack = () => {
    this.navigation.navigate("Home");
  }

  spawnModal = () => {
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
        <TouchableOpacity onPress={() => this.spawnCalendar()}>
          <Text style={[{ fontSize: 24 }, { margin: 10 }]}>Time</Text>
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
    var dd = this.state.dropdown;
    dd.push(
      <FlatList style={styles.list} data={DATA} renderItem={this.renderDropdown} keyExtractor={item => item.id} />
    );
    this.setState({ dropdown: dd });
  }

  spawnSessionList = () => {
    var ss = this.state.session;
    console.log(this.state.date);
    sessionData.push({ id: Math.floor((Math.random() * 9999) + 1).toString(), friends: this.state.friend.toString(), date: this.state.date, sessionName: this.state.sessionName });
    ss.push(
      <FlatList style={styles.sessionList} data={sessionData} renderItem={this.renderSession} keyExtractor={item => item.id} />
    );
    this.setState({ session: ss });
    this.state.friend.length = 0;
    this.setState({ friend: this.state.friend });
    this.setState({ date: '' });
    this.setState({ sessionName: "" });
    this.setState({ noChosenDate: true });
  }

  spawnCalendar = () => {
    var cl = this.state.calendar;
    cl.push(
      <FlatList style={styles.list} data={Dates} renderItem={this.renderCalendar} keyExtractor={item => item.id} />
    );
    this.setState({ calendar: cl });
  }

  addFriend = (name) => {
    var ch = this.state.friend;
    ch.push(name);
    this.setState({ friend: ch });
  }

  addDate = (n) => {
    var ch = n;
    var cl = this.state.calendar;
    this.state.noChosenDate = false;
    this.state.calendar.length = 0;
    this.setState({ calendar: cl });
    this.setState({ date: ch });
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
    if (this.state.date == "") {
      return;
    }
    if (this.state.sessionName == "") {
      return;
    }
    var modal = this.state.modal;
    modal.length = 0;
    this.setState({ modal: modal });
    this.spawnSessionList();
  }

  renderDropdown = (item) => {
    return (<Friend item={item.item} play={this} />);
  }

  renderCalendar = (item) => {
    return (<Date item={item.item} play={this} />);
  }

  renderSession = (item) => {
    return (<Session item={item.item} play={this} />);
  }

  fetchFriends = () => {
    let friends = fetch("https://app.gpgearheads.org/api/friends_list",
      {
        //mode: "no-cors",
        credentials: "include"
      }).then(function (response) { return response.json(); })
      .then(function (json) {
        console.log(json.friends);
      });
  }
}

const DATA = [
  {
    id: '1',
    name: 'ok'
  },
  {
    id: '2',
    name: 'oof'
  }
];

const sessionData = [
  //Session instances, use to display multiple instances of sessions
];

const Dates = [{ id: '1', date: "1 Hour" }, { id: '2', date: "1 Day" }, { id: '3', date: "1 Week" }, { id: '4', date: "1 Month" }];

function Friend(play) {
  let itemData = play.play.state.check;
  return (
    <TouchableOpacity style={styles.optionBox} onPress={() => play.play.addFriend(play.item.name)}>
      <Text>{play.item.name}</Text>
      {itemData}
    </TouchableOpacity>);
}

function Date(play) {
  if (play.play.state.noChosenDate) {
    return (
      <TouchableOpacity style={styles.optionBox} onPress={() => play.play.addDate(play.item.date)}>
        <Text>{play.item.date}</Text>
      </TouchableOpacity>
    );
  }
  else {
    return (<View></View>);
  }
}

function Session(play) {
  return (
    <TouchableOpacity style={styles.sessionBox} onPress={() => play.play.navigation.navigate("Game")}>
      <Text>{play.item.sessionName}</Text>
      <Text>{play.item.friends}</Text>
      <Text>{play.item.date}</Text>
    </TouchableOpacity>
  );
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
    right: 0,
    top: 12.75,
  },
  modal: {
    width: 250,
    height: 350,
    position: "absolute",
    left: 80,
    top: 100,
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
    width: 100,
    height: 50,
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10,
  },
  sessionBox:
  {
    width: 350,
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
    width: 1000,
    height: 1000,
    position: "absolute",
    left: "35%",
    top: "60%",
    zIndex: 1,
  },
  sessionList:
  {
    width: 450,
    height: 1000,
    position: "absolute",
    left: "5%",
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
