import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function AddDeck() {
  const [value, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>What is the title of your new Deck ?</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#AA36F4" }]}
        onPress={() => console.log(value)}
      >
        <Text style={[styles.text, { color: "white" }]}>Create Deck</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    fontSize: 24,
    textAlign: "center",
  },
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: 20,
  },
  inputText: {
    borderColor: "purple",
    borderWidth: 1,
    alignSelf: "center",
    width: "95%",
    backgroundColor: "white",
    fontSize: 18,
    color: "purple",
  },
  button: {
    alignItems: "center",
    // backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 15,
    borderColor: "#AA36F4",
    borderWidth: 2,
    borderRadius: 20,
  },
});
