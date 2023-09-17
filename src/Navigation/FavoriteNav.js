import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from '../screens/Favorites';
import PokemonScreen from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function FavoriteNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='FavoriteStack' 
        component={Favorites} 
        options={{title: '', headerShown: false}}/>

        <Stack.Screen name='Pokemon' component={PokemonScreen} 
        options={{title: '', headerShown: false}}/>
    </Stack.Navigator>
  )
}