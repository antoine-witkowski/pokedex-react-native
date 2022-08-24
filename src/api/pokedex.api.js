import APIRoot from './index.api';

const pokedexApi = new APIRoot('/pokemon');
export const usePokedex = () => {
  const fetchPokedex = async ({limit, offset}) => {
    try {
      const res = await pokedexApi.api().get('/', {params: {limit, offset}});
      return res.data.results;
    } catch (error) {
      console.error('ERROR', error);
      throw error;
    }
  };

  const fetchPokemon = async id => {
    try {
      const res = await pokedexApi.api().get(`/${id}`);
      return res.data;
    } catch (error) {
      console.error('ERROR', error);
      throw error;
    }
  };

  return {
    fetchPokedex,
    fetchPokemon,
  };
};
