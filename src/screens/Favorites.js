import { Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React, {useState, useCallback} from 'react'
import { getFavoritePokemon} from '../api/addFavFunction'
import useAuth from '../Hooks/UseAuth'
import { pokemonDetails } from '../api/dataFetch'
import PokemonList from '../components/PokemonList'
import { SafeAreaView } from 'react-native-safe-area-context';
import NotLoggedin from '../components/NotLoggedin';

export default function FavoritesScreen() {
  const [pokemons, setPokemons] = useState([])
  const {auth} = useAuth();

  useFocusEffect(
    useCallback(
      useCallback(() => {
        if(auth){
          (async () => {
            const response = await getFavoritePokemon();
    
            const pArray = [];
    
            for await(const id of response){ 
            const pokemonData = await pokemonDetails(id); 
              pArray.push({ 
              id: pokemonData.id,
              name: pokemonData.name,
              type: pokemonData.types[0].type.name,
              image: pokemonData.sprites.other[`official-artwork`].front_default
            })
          }
            setPokemons(pArray);
            console.log(pArray);
          })();
        }
      }, [auth])
    )
  )

  
  return (
    <SafeAreaView>
      {!auth ? <NotLoggedin /> : <PokemonList pokemons={pokemons}/>}
    </SafeAreaView>
    
  )
}