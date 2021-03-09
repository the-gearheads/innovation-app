import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Modal, TouchableOpacity, FlatList, Image } from "react-native";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import { color } from "react-native-reanimated";
import { monsterBackground, monsterBackgroundPerson } from "./imageNames.js";
//import { TouchableOpacity } from "react-native-gesture-handler";

export default function Game({ route, navigation }) {
    const sessionId = route.params.id;
    return <GamePage navigation={navigation} sessionId={sessionId} />;
}

class GamePage extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    state = {
        name: "",
        friends: [],
        player_attack: "",
        damage: 0,
        attackList: ["Easy", "Medium", "Hard"],
        exerciseEasyList: ["asf"], //Fill something here
        exerciseMediumList: ["asf"], //Fill something here
        exerciseHardList: ["fa"], //Fill something here
        currentExercise: '',
        disabled: false
    }
    componentDidMount() {
        var thisVar = this;
        var avatarNum;
        let sessionId = this.props.sessionId;
        fetch("https://app.gpgearheads.org/api/sessions",
            {
                credentials: "include"
            }).then(function (fetchResponse) {
                return fetchResponse.json();
            }).then(function (json) {
                for (var i = 0; i < json.sessions.length; i++) {
                    if (json.sessions[i].id == sessionId) {
                        avatarNum = json.sessions[i].users.length;
                        console.log(json.sessions[i].users.length);
                        var avatarJSX = [];
                        for (var q = 0; q < avatarNum; q++) {
                            avatarJSX.push(<Image source={{ uri: monsterBackgroundPerson }} style={[styles.avatar, {
                                top: (25 + Math.floor(Math.random() * 25) + 1) + '%',
                                left: (Math.floor(Math.random() * 50) + 1) + '%'
                            }]} ></Image>);
                        }
                        thisVar.setState({ avatarsJSX: avatarJSX });
                    }
                }
            });
    }

    render() {
        let avatarsJSX = this.state.avatarsJSX;
        let aJSX;
        console.log(avatarsJSX);
        if (typeof avatarsJSX == 'undefined') {
            return null;
        }
        // console.log(avatarsJSX[0])
        return (
            <View style={styles.container}>
                {/* <Image source={{ uri: monsterBackgroundPerson }} style={[styles.avatar, {
                    top: (25 + Math.floor(Math.random() * 25) + 1) + '%',
                    left: (Math.floor(Math.random() * 50) + 1) + '%'
                }]} ></Image>
                <Image source={{ uri: monsterBackgroundPerson }} style={[styles.avatar, {
                    top: (25 + Math.floor(Math.random() * 25) + 1) + '%',
                    left: (Math.floor(Math.random() * 50) + 1) + '%'
                }]} ></Image>
                <Image source={{ uri: monsterBackgroundPerson }} style={[styles.avatar, {
                    top: (25 + Math.floor(Math.random() * 25) + 1) + '%',
                    left: (Math.floor(Math.random() * 50) + 1) + '%'
                }]} ></Image> */}
                {avatarsJSX}
                <Image source={{ uri: monsterBackground }} style={styles.display}>

                </Image>
                <View style={styles.main}>
                    <View style={styles.label}>
                        <Text>{this.state.currentExercise}{this.state.boss_health}</Text>
                    </View>
                    <TouchableOpacity style={styles.easyBtn} onPress={() => this.defineAttack("Easy")} disabled={this.state.disabled}>
                        <Text style={[{ color: "white" }, { fontSize: 15 }]}>Easy</Text>
                        <Text style={[{ color: "black" }, { fontSize: 20 }, { position: "absolute" }, { top: -40 }, { left: "22.5%" }]}>100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediumBtn} onPress={() => this.defineAttack("Medium")} disabled={this.state.disabled}>
                        <Text style={[{ color: "white" }, { fontSize: 15 }]}>Medium</Text>
                        <Text style={[{ color: "black" }, { fontSize: 20 }, { position: "absolute" }, { top: -40 }, { left: "22.5%" }]}>200</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hardBtn} onPress={() => this.defineAttack("Hard")} disabled={this.state.disabled}>
                        <Text style={[{ color: "white" }, { fontSize: 15 }]}>Hard</Text>
                        <Text style={[{ color: "black" }, { fontSize: 20 }, { position: "absolute" }, { top: -40 }, { left: "22.5%" }]}>300</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.randBtn} onPress={() => this.defineAttack("Random")} disabled={this.state.disabled}>
                        <Text style={[{ color: "white" }, { fontSize: 15 }]}>Random Difficulty</Text>
                        <Text style={[{ color: "black" }, { fontSize: 20 }, { position: "absolute" }, { top: -40 }, { left: "22.5%" }]}>200</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.submitBtn} onPress={() => this.submit()} disabled={this.state.disabled}>
                        <Text style={[{ color: "white" }, { fontSize: 15 }]}>Submit</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.back} onPress={() => this.goBack()}>
                        <Text style={[{ fontSize: 20 }]}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    goBack = () => {
        this.navigation.navigate("Session");
    }

    defineAttack = (attack) => {
        this.setState({ player_attack: attack })
        this.setState({ disabled: true });
        if (attack == "Easy") {
            let randEx = Math.floor((Math.random() * this.state.exerciseEasyList.length));
            this.state.currentExercise = this.state.exerciseEasyList[randEx];
            this.state.damage = 100;
        }
        else if (attack == "Medium") {
            let randEx = Math.floor((Math.random() * this.state.exerciseMediumList.length));
            this.state.currentExercise = this.state.exerciseMediumList[randEx];
            this.state.damage = 200;
        }
        else if (attack == "Hard") {
            let randEx = Math.floor((Math.random() * this.state.exerciseHardList.length));
            this.state.currentExercise = this.state.exerciseHardList[randEx];
            this.state.damage = 300;
        }
        else if (attack == "Random") {
            let randAttack = Math.floor((Math.random() * 3));
            if (this.state.attackList[randAttack] == "Easy") {
                let randEx = Math.floor((Math.random() * this.state.exerciseEasyList.length));
                this.state.currentExercise = this.state.exerciseEasyList[randEx];
            }
            else if (this.state.attackList[randAttack] == "Medium") {
                let randEx = Math.floor((Math.random() * this.state.exerciseMediumList.length));
                this.state.currentExercise = this.state.exerciseMediumList[randEx];
            }
            else if (this.state.attackList[randAttack] == "Hard") {
                let randEx = Math.floor((Math.random() * this.state.exerciseHardList.length));
                this.state.currentExercise = this.state.exerciseHardList[randEx];
            }
            this.state.damage = 200;
        }

        let response = fetch("https://app.gpgearheads.org/api/attack",
            {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({ id: this.props.sessionId, damage: this.state.damage })
            }).then((response) => {
                if (response.ok) {
                    console.log(this.state.player_attack);
                }
            });
        let sessionId = this.props.sessionId;
        let fetchResponse = fetch("https://app.gpgearheads.org/api/sessions",
            {
                credentials: "include"
            }).then(function (fetchResponse) {
                return fetchResponse.json();
            }).then(function (json) {
                for (var i = 0; i < json.sessions.length; i++) {
                    if (json.sessions[i].id == sessionId) {
                        console.log(json.sessions[i].bossHealth);
                    }
                }
            });
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
        width: "100%",
        height: "55%",
        borderColor: "black",
        borderWidth: 5
    },
    avatar: {
        zIndex: 1500,
        width: '10%',
        height: '10%',
        position: 'absolute',
        // top: "50%"

    },
    main:
    {
        width: "100%",//415,
        height: "35%",//280,
        borderColor: "black",
        borderWidth: 5,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    label:
    {
        width: "45%",//200,
        height: "10%",//25,
        borderColor: "black",
        borderWidth: 5,
        position: "absolute",
        top: "10%",
        left: "25%"
    },
    easyBtn:
    {
        backgroundColor: "green",
        width: "17.5%",
        height: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 2,
    },
    mediumBtn:
    {
        backgroundColor: "orange",
        width: "17.5%",
        height: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 2,
    },
    hardBtn:
    {
        backgroundColor: "red",
        width: "17.5%",
        height: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 2,
    },
    randBtn:
    {
        backgroundColor: "brown",
        width: "17.5%",
        height: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 2,
    },
    submitBtn:
    {
        backgroundColor: "grey",
        width: "17.5%",
        height: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 2,
    },
    back:
    {
        backgroundColor: "lightgrey",
        width: "25%",
        height: "15%",
        position: "absolute",
        top: "75%",
        left: "2.5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 10
    }
});