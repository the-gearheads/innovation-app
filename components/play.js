import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Modal, TouchableOpacity, Dropdown} from "react-native";
import PropTypes from "prop-types";
//import { TouchableOpacity } from "react-native-gesture-handler";

export default function Play({navigation}) 
{
  return <PlayPage navigation={navigation} />;
}

class PlayPage extends Component {
  constructor(props) 
  {
    super(props);
    this.navigation = props.navigation;
  }

  state = 
  {
    username: '',
    modal: [],
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
        </View>
    );
  }

  spawnModal = () => 
  {
    var md = this.state.modal;
    md.push(
      <Modal style={styles.modal}>
        <Text style={[{fontSize: 36}]}>New Session</Text>
        <TouchableOpacity onPress={() => this.spawnDropdown()}>
          <Text>View Friends</Text>
        </TouchableOpacity>
      </Modal>);
    this.setState({modal: md});
  }

  spawnDropdown = () => 
  {

  }

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
  },
  modal: 
  {
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
  }
});
