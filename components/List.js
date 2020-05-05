import React, { Component } from "react";
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { connect } from "react-redux";

const List = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.decksList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.deck}
            onPress={() => props.navigation.navigate("Deck", { DeckId: item.title })}
          >
            <View>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={{ textAlign: "center" }}>{item.questions&&item.questions.length()}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

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
  },
  deck: {
    padding: 10,
    minHeight: 100,
    borderWidth: 1,
    borderColor: "#AA36F4",
    margin: 9,
    marginBottom: 13,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

const mapStateToProps = ({ decks }) => {

  const decksList = [];
  Object.entries(decks).forEach(([key, value]) => {
    decksList.push(value);
  });



  return {
    decksList
  };
};

export default connect(mapStateToProps)(List);
