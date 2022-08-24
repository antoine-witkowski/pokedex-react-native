import React, {useState, useEffect} from 'react';
import {FlatList, Pressable} from 'native-base';
import {usePokedex} from '../../api';
import {PokemonCard} from '../../components';
import Carousel from 'react-native-snap-carousel';

export const PokedexView = ({navigation}) => {
  const [pokedex, setPokedex] = useState([]);

  const {fetchPokedex} = usePokedex();

  useEffect(() => {
    fetchPokedex({limit: 151, offset: 0}).then(res => setPokedex(res));

    navigation.setOptions({
      title: 'Pokedex',
    });
  }, []);

/*  return (
    <FlatList
      data={pokedex}
      keyExtractor={(item, index) => index}
      renderItem={({item: pokemon}) => {
        return (
          <Pressable
            onPress={() =>
              navigation.navigate('pokemonView', {
                pokemon,
              })
            }>
            <PokemonCard pokemon={pokemon} />
          </Pressable>
        );
      }}
    />
  );*/

  return (
    <Carousel
      data={pokedex}
      sliderWidth={350}
      itemWidth={300}
      renderItem={({item: pokemon}) => {
        return (
          <Pressable
            onPress={() =>
              navigation.navigate('pokemonView', {
                pokemon,
              })
            }>
            <PokemonCard pokemon={pokemon} />
          </Pressable>
        );
      }}
    />
  );
};
