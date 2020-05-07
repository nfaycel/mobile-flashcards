import React from "react";
import { View, Text } from "react-native";
// import { connect } from "react-redux";

function Quiz(props) {
  const deck = props.route.params.mDeck;
 // const deck = props.deck(props.route.params.DeckId);
  return (
    <View>
      {deck.questions.map((card,index) => {
        return (
          <View key={index}>
            <Text>question: {card.question}</Text>
            <Text>answer:{card.answer} </Text>
          </View>
        );
      })}
    </View>
  );
}

export default (Quiz);
