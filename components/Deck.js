import React, { Component } from 'react'
import { View,Text } from 'react-native'

export default class Deck extends Component {
    
    render() {
        console.log( this.props.route.params.DeckId.key)
        return (
            <View>
                <Text>Card Detail here  !!!! {this.props.route.params.DeckId.key}</Text>                
            </View>
        )
    }
}
