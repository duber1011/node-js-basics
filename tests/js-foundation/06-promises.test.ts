import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises.ts', () => {
  test('getPokemonById should return a pokemon name', async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);
    expect(pokemonName).toBe('bulbasaur');
  });

  test('getPokemonById should throw an error if pokemon not found', async () => {
    const pokemonId = 99999;
    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy(); // This line should not be reached
    } catch (error) {
      expect(error).toBe(`pokemon not found with id ${pokemonId}`);
    }
  });
});
