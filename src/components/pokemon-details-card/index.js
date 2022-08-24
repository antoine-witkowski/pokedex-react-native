import React from 'react';
import {HStack, Image, Text, View, VStack} from 'native-base';
import {FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styleSheet';
import {PokemonType, PokemonAttack} from '../.';
import {Invert, invert} from 'react-native-color-matrix-image-filters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const PokemonDetailsCard = ({id}) => {
  const linearGradientColor = 'da70d6';
  return (
    <HStack justifyContent="center">
      <View style={styles.backgroundCard}>
        <LinearGradient
          colors={['00', '99'].map(o => `#${linearGradientColor}${o}`)}
          style={styles.pokemonDetailsContent}>
          <VStack>
            <Text style={[styles.title, styles.white]} fontSize="2xl">
              {`#${id.id} ${id.name}`}
            </Text>
            <HStack justifyContent="center">
              <Image
                alt={`${id.name} picture`}
                style={styles.pokecardLogo}
                source={{uri: id.sprites.other.home.front_default}}
              />
            </HStack>
            <FlatList
              style={styles.blockTypeAlign}
              data={id.types}
              keyExtractor={(item, index) => index}
              horizontal={true}
              renderItem={({item: type}) => {
                return <PokemonType type={type.type.name} />;
              }}
            />
            <VStack style={{marginBottom: 16}}>
              <FlatList
                data={id.moves.slice(0, 4)}
                keyExtractor={(item, index) => index}
                renderItem={({item: move}) => {
                  return <PokemonAttack attackName={move.move.name} />;
                }}
              />
            </VStack>
            <HStack space={2} style={[{justifyContent: 'space-between'}, styles.botter]}>
              <View style={[styles.row, styles.botter]}>
                <Text style={styles.white} fontSize="xl">
                  {id.weight}
                </Text>
                <Invert value={invert}>
                  <Image
                    alt="weight icon"
                    style={styles.icon}
                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/76/76651.png'}}
                  />
                </Invert>
              </View>
              <View style={[styles.row, styles.botter]}>
                <Text style={[styles.white, styles.botter]} fontSize="xl">
                  {id.height}
                </Text>
                <Icon name="human-male-height-variant" size={50} color="#F7F7F7"/>
              </View>
            </HStack>
          </VStack>
        </LinearGradient>
      </View>
    </HStack>
  );
};
