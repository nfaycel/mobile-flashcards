import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DeckList from "./components/DeckList";
import Deck from "./components/Deck";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="DeckList" component={DeckList} />
          <Stack.Screen name="Deck" component={Deck} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
