import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DeckList from "./components/DeckList";
import Deck from "./components/Deck";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddCard from "./components/AddCard";

const Stack = createStackNavigator();

export default class App extends React.Component {
  // static navigationOptions = {
  //   title: "DeckList",
  //   headerStyle: {
  //     backgroundColor: "#f4511e",
  //   },
  //   headerTintColor: "#fff",
  //   headerTitleStyle: {
  //     fontWeight: "bold",
  //   },
  // };
  render() {
    return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="DeckList"
            component={DeckList}
            // options = {{ headerShown: false }}
            options={({ route }) => ({ title: getHeaderTitle(route),headerTitleAlign:"center" })}
          />
          <Stack.Screen
            name="Deck"
            component={Deck}
            options={({ route }) => {
              return { title: route.params.DeckId.key,headerTitleAlign:"center",headerTruncatedBackTitle:true, headerBackTitle: route.params.DeckId.key, };
            }}
          />
           <Stack.Screen
            name="AddCard"
            component={AddCard}
            options={({ route }) => {
              return { title: route.params.DeckId.key,headerTitleAlign:"center",headerBackTitleVisible:true,headerTruncatedBackTitle:true, headerBackTitle: route.params.DeckId.key, };
            }}
          />
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

function getHeaderTitle(route) {
  // Access the tab navigator's state using `route.state`
  const routeName = route.state
    ? // Get the currently active route name in the tab navigator
      route.state.routes[route.state.index].name
    : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
      // In our case, it's "Feed" as that's the first screen inside the navigator
      route.params?.screen || "Decks List";

  return routeName;
}
