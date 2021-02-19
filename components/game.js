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
                        <Text style={[{ color: "white" }, { fontSize: 24 }]}>Easy</Text>
                        <Text style={[{ color: "black" }, { fontSize: 24 }, { position: "absolute" }, { top: -40 }, { left: "45%" }]}>100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediumBtn} onPress={() => this.defineAttack("Medium")} disabled={this.state.disabled}>
                        <Text style={[{ color: "white" }, { fontSize: 24 }]}>Medium</Text>
                        <Text style={[{ color: "black" }, { fontSize: 24 }, { position: "absolute" }, { top: -40 }, { left: "45%" }]}>200</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hardBtn} onPress={() => this.defineAttack("Hard")} disabled={this.state.disabled}>
                        <Text style={[{ color: "white" }, { fontSize: 24 }]}>Hard</Text>
                        <Text style={[{ color: "black" }, { fontSize: 24 }, { position: "absolute" }, { top: -40 }, { left: "45%" }]}>300</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.randBtn} onPress={() => this.defineAttack("Random")} disabled={this.state.disabled}>
                        <Text style={[{ color: "white" }, { fontSize: 24 }]}>Random Difficulty</Text>
                        <Text style={[{ color: "black" }, { fontSize: 24 }, { position: "absolute" }, { top: -40 }, { left: "45%" }]}>200</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitBtn} onPress={() => this.submit()}>
                        <Text style={[{ color: "white" }, { fontSize: 24 }]}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
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
        width: "100vw",
        height: "65vh",
        borderColor: "black",
        borderWidth: 5
    },
    main:
    {
        width: "100vw",
        height: "28vh",
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
        width: "15vw",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 50,
    },
    mediumBtn:
    {
        backgroundColor: "orange",
        width: "15vw",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 50,
    },
    hardBtn:
    {
        backgroundColor: "red",
        width: "15vw",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 50,
    },
    randBtn:
    {
        backgroundColor: "brown",
        width: "15vw",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 50,
    },
    submitBtn:
    {
        backgroundColor: "grey",
        width: "15vw",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 50,
    }
});