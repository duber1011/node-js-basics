import { httpClientPlugin as http } from '../plugins/http-client.plugin';
//const { http } = require('../plugins');

export const getPokemonById = async (id: string | number): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url);

    // const resp = await fetch( url );
    // const pokemon = await resp.json();

    // throw new Error('Pokemon no existe');

    return pokemon.name;

    // return fetch( url )
    //   .then( ( resp ) => resp.json())
    //   // .then( () => { throw new Error('Pokemon no existe') })
    //   .then( ( pokemon ) => pokemon.name );
  } catch (error) {
    // console.log('Error en el try', error);
    // return 'pokemon not found';
    throw `pokemon not found with id ${id}`;
  }
};
