import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function AddDeck() {
  const [value, onChangeText] = React.useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.text}>What is the title of your new Deck ?</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log(value)}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    fontSize: 22,
    textAlign: "center",
    marginBottom: 15,
  },
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    alignItems: "stretch",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  inputText: {
    borderColor: "purple",
    borderWidth: 1,
    alignSelf: "center",
    width: "95%",
    marginBottom: 20,
    backgroundColor: "white",
    fontSize: 18,
    color: "purple",
    borderRadius: 9,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    borderColor: "#AA36F4",
    borderRadius: 20,
    height: 40,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#AA36F4",
  },
});
