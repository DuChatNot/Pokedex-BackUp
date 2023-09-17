import React from 'react';
import { Image } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import PokedexScreen from './StackNav';
import AccountScreen from '../screens/Account';
import FavoriteNav from './FavoriteNav';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator initialRouteName='Pokedex'>
        <Tab.Screen name ='Favorites' component={FavoriteNav} options = {{
          tabBarIcon: ({color,size}) => (<Icon name='heart' color={color} size={size}/>),
          headerTransparent: true,
          title: ''
        }}/>

        <Tab.Screen name='Pokedex' component={PokedexScreen} options={{
          tabBarLabel: 'Pokedex',
          tabBarIcon: () => renderPokeball(),
          title: '',
          headerTransparent: true
        }}/>

        <Tab.Screen name='Account' component={AccountScreen} options={{
          tabBarLabel:'Profile',
          tabBarIcon: ({color, size}) => (<Icon name='user' color={color} size={size}/>)
        }}/>
    </Tab.Navigator>
  )
};


const renderPokeball = () => {
  return(
    <Image source={require('../assets/Pokeball.png')}
    style={{width: 50, height: 50, top: -5}}
    />
  );
};