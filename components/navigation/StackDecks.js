import React from "react"
import { createStackNavigator, TransitionPresets,TransitionSpecs,CardStyleInterpolators } from "@react-navigation/stack";
import AddCard from "../AddCard";
import Quiz from "../Quiz";
import List from "../List";
import Deck from "../Deck";


const StackDecks = createStackNavigator();

export const StackDecksComponent = () => (
  <StackDecks.Navigator screenOptions={{
    gestureEnabled:true,
    gestureDirection:"horizontal",
    ...TransitionPresets.SlideFromRightIOS,
    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    // TransitionSpecs:{
    //   open:animationConfig,
    //   close:animationCloseConfig,
    // }
  }}
  headerMode="float"
  animation="fade"
  >
    <StackDecks.Screen
      name="DecksList"
      component={List}
      options={() => ({
        title: "Deck List",
        headerTitleAlign: "center",
      })}
    />
    <StackDecks.Screen
      name="Deck"
      component={Deck}
      options={({ route }) => {
        return {
          title: route.params.DeckId,
          headerTitleAlign: "center",
          headerTruncatedBackTitle: true,
          headerBackTitle: route.params.DeckId,
        };
      }}
    />
    <StackDecks.Screen
      name="AddCard"
      component={AddCard}
      options={({ route }) => {
        return {
          title: "Add Card to " + route.params.DeckId,
          headerTitleAlign: "center",
          // headerBackTitleVisible: true,
          headerTruncatedBackTitle: true,
          headerBackTitle: route.params.DeckId,
        };
      }}
    />
    <StackDecks.Screen
      name="Quiz"
      component={Quiz}
      options={({ route }) => {
        return {
          title: "Take Quiz : " + route.params.DeckId,
          headerTitleAlign: "center",
          // headerBackTitleVisible: true,
          headerTruncatedBackTitle: true,
          headerBackTitle: route.params.DeckId,
          tabBarVisible: false,
        };
      }}
    />
  </StackDecks.Navigator>
);

// Animation config
// const animationCloseConfig = {
//   animation: 'timing',
//   config:{
//     duration: 500,
//     easing: Easing.linear,
//   }
// }

// const animationConfig = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 50,
//     mass: 3,
//     overshootClamping: false,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };

