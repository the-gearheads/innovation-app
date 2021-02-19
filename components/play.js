import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Modal, TouchableOpacity, FlatList } from "react-native";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
//import { TouchableOpacity } from "react-native-gesture-handler";

export default function Play({ navigation }) {
  return <PlayPage navigation={navigation} />;
}

class PlayPage extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  state =
    {
      username: '',
      date: '',
      noChosenDate: true,
      modal: [],
      dropdown: [],
      friend: [],
      calendar: [],
      session: [],


    };

  render() {
    return (
      <View style={styles.root} key={"pog"}>
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
      </View>
    );
  }

  spawnModal = () => {
    var md = this.state.modal;
    var ss = this.state.session;
    ss.length = 0;
    this.setState({session: ss});
    md.push(
      <Modal style={styles.modal}>
        <Text style={[{ fontSize: 36 }]}>New Session</Text>
        <TouchableOpacity onPress={() => this.spawnDropdown()}>
          <Text style={[{ fontSize: 24 }, { margin: 10 }]}>View Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.spawnCalendar()}>
          <Text style={[{ fontSize: 24 }, { margin: 10 }]}>Time</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.submitFriends()}>
          <Text style={[{ fontSize: 15 }, { margin: 10 }, { position: "relative" }, { top: "20vh" }, { left: "-7.5vh" }, { borderColor: "black" }, { borderWidth: 3 }]}>Submit Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.submitAll()}>
          <Text style={[{ fontSize: 15 }, { margin: 10 }, { position: "relative" }, { top: "15.25vh" }, { left: "7.5vh" }, { borderColor: "black" }, { borderWidth: 3 }]}>Submit Total</Text>
        </TouchableOpacity>

      </Modal>);
    this.setState({ modal: md });
  }

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
    sessionData.push({id: Math.floor((Math.random() * 9999) + 1).toString(), friends: this.state.friend.toString(), date: this.state.date} );
    ss.push(
      <FlatList style={styles.list} data={sessionData} renderItem={this.renderSession} keyExtractor={item => item.id} />
    );
    this.setState({ session: ss });
    this.state.friend.length = 0;
    this.setState({friend: this.state.friend});
    this.setState({date: ''});
    this.setState({noChosenDate: true});
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
    this.setState({ date: ch});
  }

  submitFriends = () => {
    var dd = this.state.dropdown;
    dd.length = 0;
    this.setState({ dropdown: dd });
  }

  submitAll = () => {
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
    return (<Session item={item.item} play={this}/>);
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
        <Text>Friends and Date
          <List>
            <li>
              <ul>{play.item.friends}</ul>
              <ul>{play.item.date}</ul>
            </li>
          </List>
        </Text>
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
    right: -10,
    top: 12.75,
  },
  modal: {
    width: "25%",
    height: "50%",
    position: "absolute",
    left: "37.5vw",
    top: "25vh",
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
    width: "15vh",
    height: "5vh",
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10,
  },
  sessionBox:
  {
    width: "50vh",
    height: "15vh",
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: "lightblue",
    margin: 10,
  },
  greenBlock:
  {
    width: "15vh",
    height: "5vh",
    backgroundColor: "green",
    position: "absolute",
    top: "10vh",
    left: "10vh",
  },
  list:
  {
    width: "100vw",
    height: "50vh",
    position: "absolute",
    left: "30vh",
    top: "20vh",
    zIndex: 1,
  }
});
