import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAV_STORAGE } from "../utils/constants";

export async function getFavoritePokemon () {
    try{
        const response = await AsyncStorage.getItem(FAV_STORAGE);
        return JSON.parse(response || []);
    } catch(e) {throw e;}
}

export async function addFavoritePokemon (id) {
    try{
        const favorites = await getFavoritePokemon();
        favorites.push(id);

        await AsyncStorage.setItem(FAV_STORAGE, JSON.stringify(favorites))

    } catch (e){throw e;}
}

export async function isPokemonFav(id){
    try{
        const response = await getFavoritePokemon();
        return includes(response, id);
    } catch (e){throw e}
};

export async function removeFavorite(id) {
    try{
        const favorites = await getFavoritePokemon();
        const newFavorites = pull(favorites, id);
        await AsyncStorage.setItem(FAV_STORAGE, JSON.stringify(newFavorites));
    } catch(e){throw e;}
}