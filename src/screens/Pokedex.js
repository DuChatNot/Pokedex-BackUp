import {SafeAreaView, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import PokemonList from '../components/PokemonList.js';
import { fetchPokemon, getPokemonApi} from '../api/dataFetch.js';

export default function PokedexScreen() {
  const [pokemons, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  const loadPokemon = async () =>{
    try{
      const res = await fetchPokemon(nextUrl); 
      const pArray = [];

      for await(const p of res.results){ 
        const pokemonData = await getPokemonApi(p.url); 
        pArray.push({ 
          id: pokemonData.id,
          name: pokemonData.name,
          // order: pokemonData.order,
          type: pokemonData.types[0].type.name,
          image: pokemonData.sprites.other[`official-artwork`].front_default
        })
      }
      setPokemon([...pokemons, ...pArray])
      setNextUrl(res.next) 
    } catch (err){
      console.log(err)
    };
  };
  useEffect(() => { // Ejecuta su primer parámetro al renderizar el componente en el que está declarado (PokedexScreen en este caso)
    (async () => {
      await loadPokemon(); // Ejecuta la función asincrona loadPokemon() al renderizarse la pantalla de Pokedex (componente PokedexScreen)
    })();
  },[])
  
  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} 
      load={loadPokemon}
      isNext={nextUrl}/>
    </SafeAreaView>
  );
};