import React from 'react';
import {Image, ImageBackground} from 'react-native';
import {VStack, Text, HStack, Box} from 'native-base';
import styles from '../styleSheet';

const getID = url => {
  return url.substring(34).replace('/', '');
};

export const PokemonCard = ({pokemon}) => {
  return (
    <HStack justifyContent="center">
      <Box style={styles.card}>
        <ImageBackground
          //source={{uri: 'https://wallpapers.com/images/high/black-eevee-pokeball-s9adg52wwojurksy.jpg'}}
          source={{uri: 'https://www.fonewalls.com/wp-content/uploads/Pokemon-Minimal-Background-HD-Wallpaper.jpg'}}
          resizeMode="cover"
          style={styles.imageBackground}>
          <VStack style={styles.row}>
            <Text style={[styles.title, styles.white]} fontSize="2xl">
              {`#${getID(pokemon.url)} ${pokemon.name}`}
            </Text>
          </VStack>
          <Image
            style={styles.pokedexLogo}
            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getID(pokemon.url)}.png` }}
          />
        </ImageBackground>
      </Box>
    </HStack>
  );
};
