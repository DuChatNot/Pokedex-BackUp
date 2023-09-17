import { ScrollView, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import { pokemonDetails } from '../api/dataFetch';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useAuth from '../Hooks/UseAuth';

import Favorite from '../components/PokemonStats/Favorite';
import Header from '../components/PokemonStats/Header';
import Type from '../components/PokemonStats/Type';
import Stats from '../components/PokemonStats/Stats';

export default function Pokemon({navigation, route:{params}}) { //route = propiedad pertenenciente al objeto (pokemon) proveniente de la API

  const [pData, setpData] = useState(null)
  const {auth} = useAuth();

  useEffect(() => {
    (async ()=> {
      try{
        const response = await pokemonDetails(params.id)
        setpData(response);
      } catch(err){navigation.goBack();}
    })();
  }, [params, navigation])

    if(!pData) return null;
  return (
    <ScrollView>
      <Header name={pData.name} order={pData.id} 
      image={pData.sprites.other[`official-artwork`].front_default} 
      type={pData.types[0].type.name}/>

      {auth && <Favorite id={pData.id} name={pData.name}/>}

      <Icon name='arrow-left' color="#fff" size={20}
      style={{marginLeft: 20,
      position: 'absolute',
      top: 55,
      left: 12}} onPress={() => navigation.goBack}/>

      <Type type={pData.types}/>
      <Stats stats={pData.stats}/>
    </ScrollView>
  )
};