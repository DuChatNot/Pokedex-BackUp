import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import getColor from '../utils/getColorType';

export default function PokemonCard({data}) {

    const nav = useNavigation();

    const touchPokemon = () => {
        nav.navigate('Pokemon',{id:data.id});
    }
    const pokemonColor = getColor(data.type)
    const bgStyle = {backgroundColor: pokemonColor, ...styles.bgStyle}; // Merge de StyleSheet

return (
    <TouchableWithoutFeedback onPress={touchPokemon}>
        <View style={styles.card}>
            <View style={styles.in_card}>
                <View style={bgStyle}>
                    <Text style={styles.order}>#{`${data.id}`.padStart(3,0)}</Text>
                    <Image source={{uri: data.image}} style={styles.image}/>
                    <Text style={styles.name}>{data.name}</Text>
                </View>
            </View>
        </View>
        
    </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    card:{
        flex:1,
        margin: 2,
        height: 130,
        backgroundColor:'lightgray',
        borderRadius: 8
    },
    in_card: {
        flex: 1,
        padding: 3,
    },
    bgStyle:{
        flex: 1,
        padding: 8,
        borderRadius: 15,
    },

    order:{
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11
    },

    image:{
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 100,
        height: 100
    },

    name:{
        fontSize: 15,
        paddingTop: 15,
        color: '#fff',
        textTransform: 'capitalize'
    }
});