import React from 'react';
import {Text, View} from 'native-base';
import styles from '../styleSheet';
import {StyleSheet} from 'react-native';

export const PokemonType = ({type}) => {
  const getTypes = () => {
    switch (type) {
      case 'normal':
        return blockTypeColor.normal;
      case 'fighting':
        return blockTypeColor.fighting;
      case 'flying':
        return blockTypeColor.flying;
      case 'poison':
        return blockTypeColor.poison;
      case 'ground':
        return blockTypeColor.ground;
      case 'rock':
        return blockTypeColor.rock;
      case 'bug':
        return blockTypeColor.bug;
      case 'ghost':
        return blockTypeColor.ghost;
      case 'steel':
        return blockTypeColor.steel;
      case 'fire':
        return blockTypeColor.fire;
      case 'water':
        return blockTypeColor.water;
      case 'grass':
        return blockTypeColor.grass;
      case 'electric':
        return blockTypeColor.electric;
      case 'psychic':
        return blockTypeColor.ice;
      case 'ice':
        return blockTypeColor.flying;
      case 'dragon':
        return blockTypeColor.dragon;
      case 'dark':
        return blockTypeColor.dark;
      case 'fairy':
        return blockTypeColor.fairy;
      default:
        return blockTypeColor.normal;
    }
  };

  return (
    <View style={[styles.pokemonTypeBlock, getTypes()]}>
      <Text style={styles.pokemonTypeLabel}>{type}</Text>
    </View>
  );
};

const blockTypeColor = StyleSheet.create({
  normal: {
    backgroundColor: '#929292',
  },
  fighting: {
    backgroundColor: '#8F2C02',
  },
  flying: {
    backgroundColor: '#9CDCF0',
  },
  poison: {
    backgroundColor: '#BD66D3',
  },
  ground: {
    backgroundColor: '#D36D0F',
  },
  rock: {
    backgroundColor: '#D8BF99',
  },
  bug: {
    backgroundColor: '#76E245',
  },
  ghost: {
    backgroundColor: '#6440D5',
  },
  steel: {
    backgroundColor: '#7A939B',
  },
  fire: {
    backgroundColor: '#E52D26',
  },
  water: {
    backgroundColor: '#4C98EB',
  },
  grass: {
    backgroundColor: '#39AC04',
  },
  electric: {
    backgroundColor: '#E9CB03',
  },
  psychic: {
    backgroundColor: '#FF46C8',
  },
  ice: {
    backgroundColor: '#1FEBE4',
  },
  dragon: {
    backgroundColor: '#1300FC',
  },
  dark: {
    backgroundColor: '#594747',
  },
  fairy: {
    backgroundColor: '#F686FF',
  },
});
