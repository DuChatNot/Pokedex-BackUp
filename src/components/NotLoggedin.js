import { View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

export default function NotLoggedin() {

    const nav = useNavigation();

  return (
    <View style={sty.content}>
      <Text style={sty.text}>Login to use this function!</Text>

      <Button title='Login' onPress={() => {nav.navigate('Account')}}/>
    </View>
  )
};

const sty = StyleSheet.create({
    content:{
        marginVertical: 50,
        paddingHorizontal: 20,
    },
    text:{
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 10,
        fontSize: 20
    }
})