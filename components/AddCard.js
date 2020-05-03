import React from 'react'
import {View,Text} from 'react-native'

export default function AddCard({route}) {
    console.log(route)
    return (
        <View>
            <Text>add card component {route.params.DeckId} </Text>
        </View>
    )
}
