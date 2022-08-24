import React, {useState, useEffect} from 'react';
import {usePokedex} from '../../api';
import {PokemonDetailsCard} from '../../components';
import {Center, HStack, Spinner} from 'native-base';

import {StyleSheet} from 'react-native';
import styles from './../../components/styleSheet';

export const PokemonView = ({navigation, route}) => {
  const {pokemon} = route.params;
  const [pokedex, setPokedex] = useState(null);
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const {fetchPokemon} = usePokedex();

  useEffect(() => {
    fetchPokemon(pokemon.name).then(res => setPokedex(res));

    navigation.setOptions({
      title: capitalizeFirstLetter(pokemon.name),
    });
  }, []);

  if (!pokedex) {
    return (
      <Center>
        <HStack space={8} justifyContent="center" style={styles.backgroundCard}>
          <Spinner size="lg" color="purple.500" />
        </HStack>
      </Center>
    );
  } else {
    return <PokemonDetailsCard id={pokedex} />;
  }
};
