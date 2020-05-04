import React, { Component } from "react";
import AddDeck from "./AddDeck";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import List from "./List"

const Tab = createBottomTabNavigator();

function DeckList() {
  return(<Nav />)
}

const Nav = () => {
  return (
    <Tab.Navigator
      initialRouteName={"DeckList"}
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
      }}
    >
      <Tab.Screen name="Decks" component={List} />
      <Tab.Screen name="AddDeck" component={AddDeck} />
    </Tab.Navigator>
  );
};

export default (DeckList);
