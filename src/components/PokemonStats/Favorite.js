import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { View, StyleSheet, TouchableOpacity} from 'react-native'
import { addFavoritePokemon, isPokemonFav, removeFavorite } from '../../api/addFavFunction'

export default function Favorite({id, name}) {
    const [reload, setReload] = useState(false);
    const [isFavorite, setIsFavorite] = useState(undefined);
    console.log(isFavorite)

    useEffect(() => {
        (async () => {
            try{
                const response = await isPokemonFav(id);
                setIsFavorite(response);
            } catch(e){setIsFavorite(false)}
        })()
    }, [id, reload]);

    const onReload = () => {
        setReload(!reload)
    }

    const removeFromFavs = async () => {
        try{
            await removeFavorite(id)
            onReload();
        } catch(e){console.log (e);}
    }

    const favoriteSelected = async () => {
        try{
            await addFavoritePokemon(id);
            onReload();
        } catch (e) {console.log(e)}
        
    }
    return (
        <View style={sty.favContainer}>
            <Icon name='heart' color={'#C03028'} solid={isFavorite} size={25} style={sty.icon}/>
            <TouchableOpacity 
            onPress={isFavorite ? removeFromFavs : favoriteSelected} 
            style={sty.hitbox}/>
        </View>
        )
};

const sty = StyleSheet.create({
    favContainer:{
        marginRight:10,
        width: 75,
        height: 75,
        position: 'absolute',
        right: 5,
        top: 500,
    },
    hitbox:{
        width: 75,
        height: 75,
        position: 'absolute',
        backgroundColor: 'green', opacity: 0.5
    },
    icon:{
        pointerEvents: 'none',
        position: 'absolute',
        right: 25,
        top: 25
    }
})