import { Platform, ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList({pokemons, load, isNext}) {
  const nextLoad = () => {
    load();
  };

  return (
    <>
    <FlatList
      contentContainerStyle={styles.flat}
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(p) =>String(p.id)}
      renderItem={({item}) => <PokemonCard data={item}/>}
      onEndReached={isNext && nextLoad}
      onEndReachedThreshold={0.3}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator size='large' style={styles.spinner} color='#AEAEAE'/>
        )
      }
    />
    </>
  )
}

const styles = StyleSheet.create({
  flat:{
    padding: 5,
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
  spinner:{
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 90 : 60,
  }
})