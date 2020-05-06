import React, { useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { handleDeleteDeck } from "../actions/index";
import { connect } from "react-redux";

function Deck(props) {
  const DeckId = props.route.params.DeckId;

  useEffect(() => {
    const parent = props.navigation.dangerouslyGetParent();
    parent.setOptions({
      tabBarVisible: false,
    });
    return () =>
      parent.setOptions({
        tabBarVisible: true,
      });
  }, []);

  const handleDelete = () => {
    Alert.alert(
      "Confirm deleting ",
      "Do you want to delete this Deck?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            props
              .dispatch(handleDeleteDeck(props.route.params.DeckId))
              .then(() => props.navigation.goBack());
          },
        },
      ],
      { cancelable: false }
    );
  };

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
          onPress={() => {
            props.navigation.navigate("AddCard", { DeckId: DeckId });
          }}
        >
          <Text style={[styles.text, { color: "black" }]}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#AA36F4" }]}
          onPress={() => props.navigation.navigate("Quiz", { DeckId: DeckId })}
        >
          <Text style={[styles.text, { color: "white" }]}>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[{ backgroundColor: null }]}
          onPress={handleDelete}
        >
          <Text
            style={[
              styles.text,
              { color: "#FF1744", fontSize: 17, marginTop: 10 },
            ]}
          >
            Delete Deck {DeckId}
          </Text>
        </TouchableOpacity>
      </View>
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
  btnGroup: {
    margin: 15,
    justifyContent: "space-evenly",
  },
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Deck);
