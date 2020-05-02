import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Deck extends Component {
  render() {
    const DeckId = this.props.route.params.DeckId.key
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{DeckId}</Text>
          <Text style={[styles.text, { fontSize: 18, color: "gray" }]}>
            2 cards
          </Text>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("clicked")}
          >
            <Text style={[styles.text, { color: "black" }]}>Add Card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, {backgroundColor: "#AA36F4"}]}
            onPress={() => console.log("start quiz")}
          >
            <Text style={[styles.text, { color: "white",  }]}>Start Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{backgroundColor: null}]}
            onPress={() => console.log("delete",DeckId)}
          >
            <Text style={[styles.text, { color: "#FF1744", fontSize:17, marginTop:10 }]}>Delete Deck {DeckId}</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
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
    justifyContent: "space-evenly",
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
  btnGroup:{
      margin: 15,
      justifyContent: "space-evenly"
  }
});
