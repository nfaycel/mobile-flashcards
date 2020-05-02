import React, { Component } from "react";
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View,
  Text,
} from "react-native";
import Constants from "expo-constants";
import AddDeck from "./AddDeck";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();

export default class DeckList extends Component {
  render() {
    return <Nav />;
  }
}

const Nav = () => {
  return (
    <Tab.Navigator initialRouteName={"DeckList"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Decks") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "AddDeck") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#AA36F4",
        inactiveTintColor: "gray",
        // style:{
        //   backgroundColor: "yellow",
        //   zIndex: 34
        // }
      }}
    >
      <Tab.Screen name="Decks" component={List} />
      <Tab.Screen name="AddDeck" component={AddDeck} />
    </Tab.Navigator>
  );
};


const List = ({navigation}) => {
  return (
    <View style={styles.container}>
        <FlatList
        data={[
          { key: "Deck 1" },
          { key: "Deck 2" },
          { key: "Deck 3" },
          { key: "Deck 4" },
          { key: "Deck 5" },
          { key: "Deck 6" },
          { key: "Deck 7" },
          { key: "Deck 8" },
          { key: "Deck 9" },
          { key: "Deck 10" },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.deck}
            onPress={() => navigation.navigate(
              'Deck',
               {DeckId: item}
            )}
          >
            <View>
              <Text style={styles.text}>{item.key}</Text>
              <Text style={{ textAlign: "center" }}>3 cards</Text>
            </View>
          </TouchableOpacity>
        )}
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
