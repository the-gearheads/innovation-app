import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Modal, TouchableOpacity, FlatList } from "react-native";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import { color } from "react-native-reanimated";
//import { TouchableOpacity } from "react-native-gesture-handler";

export default function Game({ navigation }) {
    return <GamePage navigation={navigation} />;
}

class GamePage extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    state = {
        name: "",
        friends: [],
        timer: 24,
        boss_health: 1000,
        boss_damage: 100,
        party_health: 500,
        player_attack: "",
        btn_cooldown: 10,
        cooldownEnabled: false,
        attackList: ["Easy", "Medium", "Hard"],
        disabled: false
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.display}>
                    
                </View>
                <View style={styles.main}>
                    <TouchableOpacity style={styles.easyBtn} onPress={() => this.defineAttack("Easy")} disabled={this.state.disabled}>
                        <Text style={[{ color: "white" }, { fontSize: 20 }]}>Easy</Text>
                        <Text style={[{ color: "black" }, { fontSize: 20 }, { position: "absolute" }, { top: -40 }, { left: "22.5%" }]}>100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediumBtn} onPress={() => this.defineAttack("Medium")} disabled={this.state.disabled}>
                        <Text style={[{ color: "white" }, { fontSize: 20 }]}>Medium</Text>
                        <Text style={[{ color: "black" }, { fontSize: 20 }, { position: "absolute" }, { top: -40 }, { left: "22.5%" }]}>200</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hardBtn} onPress={() => this.defineAttack("Hard")} disabled={this.state.disabled}>
                        <Text style={[{ color: "white" }, { fontSize: 20 }]}>Hard</Text>
                        <Text style={[{ color: "black" }, { fontSize: 20 }, { position: "absolute" }, { top: -40 }, { left: "22.5%" }]}>300</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.randBtn} onPress={() => this.defineAttack("Random")} disabled={this.state.disabled}>
                        <Text style={[{ color: "white" }, { fontSize: 20 }]}>Random Difficulty</Text>
                        <Text style={[{ color: "black" }, { fontSize: 20 }, { position: "absolute" }, { top: -40 }, { left: "22.5%" }]}>200</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitBtn} onPress={() => this.submit()} disabled={this.state.disabled}>
                        <Text style={[{ color: "white" }, { fontSize: 20 }]}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.back} onPress={() => this.goBack()}>
                        <Text style={[{ fontSize: 20 }]}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    goBack = () => {
        this.navigation.navigate("Home");
    }

    submit = () => {
        let attack = this.state.player_attack;
        let bossHealth = this.state.boss_health;
        let attackList = this.state.attackList;
        if (!this.state.cooldownEnabled && this.state.player_attack != "") {
            if (attack == "Easy") {
                bossHealth -= 100;
            }
            else if (attack == "Medium") {
                bossHealth -= 200;
            }
            else if (attack == "Hard") {
                bossHealth -= 300;
            }
            else if (attack == "Random") {
                let randAttack = Math.floor((Math.random() * 3));
                if (attackList[randAttack] == "Easy") {
                    //insert code for choosing exercise
                }
                else if (attackList[randAttack] == "Medium") {

                }
                else if (attackList[randAttack] == "Hard") {

                }
                bossHealth -= 200;
            }
        }
        else {
            console.log("You didn't choose a mode or the cooldown period hasn't ended.");
        }

        if (this.state.timer <= 0) {
            this.setState({ disabled: false });
        }
    }

    defineAttack = (attack) => {
        this.setState({ player_attack: attack })
        this.setState({ cooldownEnabled: true });
        this.setState({ disabled: true });
    }
    enableTimer = () => {
        let timer;
        let currentMinute = new Date().getMinutes();
        let endTime = currentMinute - 10;
        if (this.state.cooldownEnabled) {
            timer = setInterval(function () {
                let t = endTime - (1 / 60);
                if (t <= 0) {
                    this.state.cooldownEnabled = false;
                }
            }, 1000);
        }
    }
}

const styles = StyleSheet.create({
    container:
    {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        flex: 1,

    },
    display:
    {
        width: 415,
        height: 450,
        borderColor: "black",
        borderWidth: 5
    },
    main:
    {
        width: 415,
        height: 280,
        borderColor: "black",
        borderWidth: 5,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    easyBtn:
    {
        backgroundColor: "green",
        width: 75,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 2,
    },
    mediumBtn:
    {
        backgroundColor: "orange",
        width: 75,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 2,
    },
    hardBtn:
    {
        backgroundColor: "red",
        width: 75,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 2,
    },
    randBtn:
    {
        backgroundColor: "brown",
        width: 75,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 2,
    },
    submitBtn:
    {
        backgroundColor: "grey",
        width: 75,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 2,
    },
    back:
    {
        backgroundColor: "lightgrey",
        width: 100,
        height: 50,
        position: "absolute",
        top: 200,
        left: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 10
    }
});