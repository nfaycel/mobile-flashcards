import React from 'react'
import {View,Text} from 'react-native'

export default function Quiz({route}) {
    console.log(route)
    return (
        <View>
            <Text>Quiz of {route.params.DeckId} </Text>
        </View>
    )
}
