import {API} from '../utils/constants';
let firstrequest = true;

export async function fetchPokemon (nextUrl) {
    try {                            
        const url = `${API}/pokemon?limit=20&offset=0`;
        let response;

        if(firstrequest) {
            response = await fetch(url)
            firstrequest = false;
        } 
        else {
            response = await fetch(nextUrl)
        }
        //const response = await fetch(nextUrl || url);
        const res = await response.json(); 
        return res;

    } catch (err) {
        throw err;
    }
};

export async function getPokemonApi(url) { // Hace fetch a una URL dada
    try{
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } 
    catch (err){
        throw err
    }
}

export async function pokemonDetails (id) {
    try{

        const url = `${API}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;

    } catch (err) {throw err}
}